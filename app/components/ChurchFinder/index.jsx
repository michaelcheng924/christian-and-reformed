import React, { Component } from 'react';
import $ from 'jquery';
import { defer, each } from 'lodash';
import { Link } from 'react-router';
import css from 'classnames';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import KeyboardArrowLeftIcon from 'material-ui-icons/KeyboardArrowLeft';

import CHURCHES from 'app/constants/baptist-churches';

export default class BaptistChurches extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showFilters: true
        };

        this.toggleFilters = this.toggleFilters.bind(this);
    }

    componentDidMount() {
        this.initMap();
    }

    toggleFilters() {
        this.setState({ showFilters: !this.state.showFilters });
    }

    initMap() {
        if (typeof window !== 'undefined') {
            var usa = {lat: 37.09024, lng: -95.712891};
            var map = new google.maps.Map(this.map, {
                zoom: 4,
                center: usa,
                mapTypeId: 'roadmap'
            });

            let infoWindow = {};

            CHURCHES.forEach((church, index) => {
                const { coordinates, details } = church;
                const { name, address, website } = details;

                var marker = new google.maps.Marker({
                    position: coordinates,
                    map: map
                });

                const tags = church.details.tags
                    ? church.details.tags.map(tag => {
                        let string = '';

                        if (tag.type === 'confession') {
                            string += `<div><i class="fa fa-book" aria-hidden="true"></i> <strong>Confession:</strong> ${tag.data}</div>`;
                        } else if (tag.type === 'current location') {
                            string += `<div><i class="fa fa-home" aria-hidden="true"></i> <strong>Current location:</strong> ${tag.data}</div>`;
                        }

                        return string;
                    }).join('')
                    : '';

                infoWindow[index] = new google.maps.InfoWindow({
                    content: `
                        <div class="info-window">
                            <h2>${name}</h2>
                            <div>${address} (<a href="https://maps.google.com?daddr=${address.replace(' ', '+')}

" target="_blank">Directions</a>)</div>
                            <div><strong>Website: </strong><a href="${website}" target="_blank">${website}</a></div>
                            <div><strong>Notes:</strong></div>
                            ${tags}
                        </div>
                    `
                });

                marker.addListener('click', () => {
                    each(infoWindow, window => { window.close() });

                    defer(() => {
                        infoWindow[index].open(map, marker);
                    });
                });
            });

            $('body').click(event => {
                if ($('.info-window').length && !$(event.target).parents('.info-window').length) {
                    each(infoWindow, window => { window.close() });
                }
            });
        }

        // Create the search box and link it to the UI element.
        var input = this.search;
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

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
          map.fitBounds(bounds);
        });
    }

    onCheck() {

    }
    
    render() {
        const classNames = css('church-directory__filters', {
            'church-directory__filters--hide': !this.state.showFilters
        });

        return (
            <div className="church-directory">
                <input id="pac-input" className="controls" type="text" placeholder="Search Box" ref={input => this.search = input} />
                <div className="map" ref={div => this.map = div} />
                <div className={classNames}>
                    <div className="church-directory__filters-title" onClick={this.toggleFilters}>
                        <strong>Filters:</strong>
                        <KeyboardArrowLeftIcon />
                    </div>
                    {
                        this.state.showFilters
                            ? (
                                <div>
                                    <RadioButtonGroup name="mapFilters" defaultSelected="baptist" onChange={this.onModeChange}>
                                        <RadioButton
                                            value="baptist"
                                            label="Baptist"
                                        />
                                        <RadioButton
                                            value="presbyterian"
                                            label="Presbyterian"
                                        />
                                        <RadioButton
                                            value="all"
                                            label="All"
                                        />
                                    </RadioButtonGroup>
                                    <Checkbox
                                        label="Confessional only"
                                        onCheck={this.onShowAnswer}
                                    />
                                    <Checkbox
                                        label="Family-integrated only"
                                        onCheck={this.onShowAnswer}
                                    />
                                </div>
                            )
                            : null
                    }
                </div>
            </div>
        );
    }
}
