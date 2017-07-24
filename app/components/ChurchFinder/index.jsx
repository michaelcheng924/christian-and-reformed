import $ from 'jquery';
import React, { Component } from 'react';
import css from 'classnames';
import { defer, each, partial } from 'lodash';
import Checkbox from 'material-ui/Checkbox';

class ChurchFinder extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            allowBoundsSave: true,
            filteredRows: null,
            infoWindow: {},
            map: null,
            markers: [],
            messageDismissed: false,
            rows: null,
            showFilters: true,
            soloEspanol: false
        };

        this.dismissMessage = this.dismissMessage.bind(this);
        this.onFilter = this.onFilter.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            $.ajax({
                context: this,
                url: '/api/global/getchurchdirectory',
                contentType: 'application/json',
                success(response) {
                    // try {
                        this.setState({
                            rows: JSON.parse(response.body).feed.entry.map(row => this.parseRowContent(row))
                        });
                    // } catch(err) {
                    //     console.log('ERROR!');
                    // }
                }
            })
        }, 500);

        this.addInfoWindowListener();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.rows && !prevState.rows) {
            this.initMap();
        }

        if (!this.state.soloEspanol && this.state.filteredRows) {
            this.setState({ filteredRows: null });
        }

        if ((this.state.soloEspanol && !prevState.soloEspanol) ||
            (!this.state.filteredRows && prevState.filteredRows)) {
            this.createMarkers();
        }
    }

    addInfoWindowListener() {
        $('body').click(event => {
            if ($('.info-window').length && !$(event.target).parents('.info-window').length) {
                each(this.state.infoWindow, window => { window.close() });
            }
        });
    }

    dismissMessage() {
        if (!this.state.messageDismissed) {
            this.setState({ messageDismissed: true });
        }
    }

    onFilter(filter) {
        let filteredRows;

        if (filter === 'soloEspanol' && !this.state.soloEspanol) {
            filteredRows = this.state.rows.filter(row => row.filter.indexOf('espanol') !== -1);
        }

        this.setState({
            [filter]: !this.state[filter],
            filteredRows: filteredRows ? filteredRows : this.state.filteredRows
        });
    }

    parseRowContent(row) {
        const content = row.content.$t;

        if (content.indexOf('address') === -1 || content.indexOf('website') === -1 || content.indexOf('lat') === -1 || content.indexOf('long') === -1 || content.indexOf('lastupdated') === -1 || content.indexOf('filter') === -1) {
            return {
                name: '',
                address: '',
                website: '',
                lat: 1,
                long: 1,
                lastUpdated: '',
                filter: ''
            };
        }

        return {
            name: row.title.$t,
            address: content.split('address: ')[1].split(', website:')[0],
            website: content.split('website: ')[1].split(', lat:')[0],
            lat: content.split('lat: ')[1].split(', long:')[0],
            long: content.split('long: ')[1].split(', lastupdated:')[0],
            lastUpdated: content.split('lastupdated: ')[1].split(', filter:')[0],
            filter: content.split('filter: ')[1]
        };
    }

    getNameAddressString(name, address) {
        return `
            <h2>${name}</h2>
            <div>${address} (<a href="https://maps.google.com?daddr=${address.replace(' ', '+')}" target="_blank">Directions</a>)</div>
        `;
    }

    getWebsiteString(website) {
        if (!website) { return ''; }

        if (website.indexOf(',') !== -1) {
            const websites = website.split(',');
            return `<div><strong>Website: </strong><a href="${websites[0]}" target="_blank">${websites[0]}</a>, <a href="${websites[1]}" target="_blank">${websites[1]}</a></div>`;
        }

        return `<div><strong>Website: </strong><a href="${website}" target="_blank">${website}</a></div>`;
    }

    getLastUpdatedString(lastUpdated) {
        if (!lastUpdated) { return ''; }

        return `<div><strong>Last updated: </strong>${lastUpdated}</div>`;
    }

    getIcon(filter) {
        if (filter.indexOf('espanol') !== -1) {
            return '/marker-espanol.png';
        }

        return '/marker-baptist.png';
    }

    createMap() {
        const map = new google.maps.Map(this.map, {
            zoom: 4,
            // USA
            center: {lat: 37.09024, lng: -95.712891},
            mapTypeId: 'roadmap'
        });

        this.setState({ map });
    }

    createMarkers() {
        this.state.markers.forEach(marker => {
            marker.setMap(null);
        });

        const markers = [];
        const infoWindow = {};

        const rows = this.state.filteredRows || this.state.rows;

        rows.forEach((row, index) => {
            const { name, address, website, lat, long, lastUpdated, filter } = row;

            // Check for duplicate entries
            // rows.forEach((row1, index1) => {
            //     if (website !== 'n/a' && index !== index1 && website === row1.website) {
            //         console.log(index, website, index1, row1.website);
            //     }
            // });

            const icon = this.getIcon(filter);

            const marker = new google.maps.Marker({
                icon,
                map: this.state.map,
                position: {
                    icon,
                    lat: Number(lat),
                    lng: Number(long)
                }
            });

            markers.push(marker);

            const nameAddressString = this.getNameAddressString(name, address);
            const websiteString = this.getWebsiteString(website);
            const lastUpdatedString = this.getLastUpdatedString(lastUpdated);

            infoWindow[index] = new google.maps.InfoWindow({
                content: `
                    <div class="info-window">
                        ${nameAddressString}
                        ${websiteString}
                        ${lastUpdatedString}
                    </div>
                `
            });

            marker.addListener('click', () => {
                each(infoWindow, window => { window.close() });

                defer(() => {
                    infoWindow[index].open(this.state.map, marker);
                });
            });
        });

        this.setState({ infoWindow, markers });
    }

    createSearchBoxAndControls() {
        // Create the search box and link it to the UI element.
        var input = this.search;
        var searchBox = new google.maps.places.SearchBox(input);
        this.state.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        this.state.map.addListener('bounds_changed', function() {
            searchBox.setBounds(this.state.map.getBounds());
        }.bind(this));

        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
            return;
            }

            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function(place) {
                if (!place.geometry) {
                  console.log("Returned place contains no geometry");
                  return;
                }

                if (place.geometry.viewport) {
                  // Only geocodes have viewport.
                  bounds.union(place.geometry.viewport);
                } else {
                  bounds.extend(place.geometry.location);
                }
            });

            this.state.map.fitBounds(bounds);
        }.bind(this));
    }

    initMap() {
        this.createMap();

        defer(() => {
            this.createMarkers();
            this.createSearchBoxAndControls();
        });
    }

    renderLoading() {
        if (this.state.rows) { return null; }

        return <h2 className="church-finder__loading">Loading data...</h2>;
    }

    renderMessage() {
        if (!this.state.rows || this.state.messageDismissed) { return null; }

        return (
            <div className="church-finder__message">
                <p><strong>Notes:</strong> These churches have not been individually vetted and may vary greatly in what they specifically believe and practice. The similarity between them is that they all profess to believe and teach the Reformed view of God's complete sovereignty in salvation. Visit the church website and contact the church directly to learn more about its distinctives.</p>
                <p>Contribute to this project (add a church, edit an existing church) by emailing Michael at <a href="mailto:cheng.c.michael@gmail.com">cheng.c.michael@gmail.com</a>.</p>
                <p><a href="https://www.opc.org/locator.html" target="_blank">OPC (Orthodox Presbyterian Church)</a> and <a href="http://www.pcaac.org/church-search/" target="_blank">PCA (Presbyterian Church of America)</a> are the Reformed denominations of the Presbyterian church. The links here will take you to their directories/church finders.</p>
                <i className="fa fa-times" onClick={this.dismissMessage} />
            </div>
        );
    }

    renderFilters() {
        const { baptistOnly, filteredRows, rows, showFilters, soloEspanol } = this.state;

        const filtersClassNames = css('church-finder__filters', {
            'church-finder__filters--show': showFilters
        });

        const currentRows = filteredRows || rows;

        return (
            <div className={filtersClassNames}>
                <i className="fa fa-chevron-down" />
                <div className="church-finder__filters-toggle" onClick={() => this.setState({ showFilters: !showFilters })}>
                    {showFilters ? 'Hide' : 'Show'}
                </div>
                <hr />
                <div><strong>{currentRows ? currentRows.length : 0}</strong> churches</div>
                <br />
                <div className="church-finder__key-row">
                    <img src="/marker-baptist.png" /> Baptist
                </div>
                <div className="church-finder__key-row">
                    <img src="/marker-espanol.png" /> Espanol
                </div>
                <Checkbox
                    className="church-finder__filter church-finder__filter--espanol"
                    label="Solo Espanol"
                    onCheck={partial(this.onFilter, 'soloEspanol')}
                    checked={soloEspanol}
                />
            </div>
        );
    }

    render() {
        const { rows } = this.state;

        const classNames = css('church-finder__map-container', {
            'church-finder__map-container--visible': this.state.rows
        });

        return (
            <div className="church-finder">
                {this.renderLoading()}

                {this.renderMessage()}

                <div className={classNames}>
                    <input id="pac-input" className="controls" type="text" placeholder="Search Box" ref={input => this.search = input} />
                    <div className="church-finder__map" ref={div => this.map = div} onClick={this.dismissMessage} />
                    {this.renderFilters()}
                </div>

            </div>
        );
    }
}

export default ChurchFinder;
