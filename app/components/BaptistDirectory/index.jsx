import React, { Component } from 'react';
import $ from 'jquery';
import { defer, each } from 'lodash';
import { Link } from 'react-router';
import CHURCHES from 'app/constants/baptist-churches';

export default class BaptistChurches extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        this.initMap();
    }

    onAdd() {
        this.setState({ about: true });
    }

    onAdd() {
        this.setState({ add: true });
    }

    onEdit(data) {
        this.setState({ edit: data });
    }

    onClose() {
        this.setState({
            about: false,
            add: false,
            edit: false
        });
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

                infoWindow[index] = new google.maps.InfoWindow({
                    content: `
                        <div class="info-window">
                            <h2>${name}</h2>
                            <div>${address}</div>
                            <div><a href="https://maps.google.com?daddr=${address.replace(' ', '+')}

" target="_blank">Directions</a></div>
                            <div><a href="${website}" target="_blank">${website}</a></div>
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
    
    render() {
        return (
            <div className="church-directory">
                <div className="church-directory__info">
                    <div>International Reformed Baptist Church Directory</div>
                    <div><strong>{CHURCHES.length}</strong> churches</div>
                </div>
                <input id="pac-input" className="controls" type="text" placeholder="Search Box" ref={input => this.search = input} />
                <div className="map" ref={div => this.map = div} />
            </div>
        );
    }
}
