import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import InfoWindowEx from "../../dashboard/components/InfoWindowEx";
import MapStyle from '../../home/containers/MapStyle';
import { fsc } from '../../../helper/fontColorHelper';
import { withMedia } from 'react-media-query-hoc';
import * as route from '../../../config/route.config';
import { withRouter } from 'react-router-dom'

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props.place_,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    infoWindowClose = () => {
        this.setState({

            showingInfoWindow: false
        });
    }

    showDetails = place => {
        this.props.history.push(`/${route.site}/${1}${this.props.location.search}`)
    };

    render() {
        const { media } = this.props
        const stores = [
            {
                name: "Mandalay",
                title: "Mandalay",
                lat: 21.954510,
                lng: 96.093292,
                id: 1
            },
            {
                name: "Bankok",
                title: "Bankok",
                lat: 13.736717,
                lng: 100.523186,
                id: 2
            },
            {
                name: "Singapore",
                title: "Singapore",
                lat: 1.351616,
                lng: 103.808053,
                id: 3
            }
        ];
        const icon = {
            anchor: new this.props.google.maps.Point(0, 0),
            url: 'data:image/svg+xml;utf-8, \<svg width="80" height="90" xmlns="http://www.w3.org/2000/svg" version="1.1">\
            <circle id="c1" cx="50" cy="35" r="10" fill="blue">\
                <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="0s" dur="3000ms" from="10" to="20" repeatCount="indefinite" fill="gradient"></animate>\
                <animate id="c1Animation1" attributeName="r" attributeType="XML" begin="3s" dur="3000ms" values="20;10;20" repeatCount="indefinite" fill="red"></animate>\
            </circle>\
            </svg>',
            strokeWeight: 0,
            scale: 1
        }
        return (
            <div style={{ borderRadius: 4, border: '0.7px solid #cccccc', height: '400px', position: 'relative', bottom: '0', paddingBottom: '40%', paddingRight: '10', paddingLeft: '0%', overflow: 'hidden', margin: '0px' }}>
                <Map
                    styles={MapStyle}
                    google={this.props.google}
                    className={"map"}
                    zoom={4}
                    initialCenter={{
                        lat: 13.736717,
                        lng: 100.523186,
                    }}
                    onClick={this.infoWindowClose}
                >
                    {stores.map((place, i) => {
                        return (
                            <Marker
                                icon={icon}
                                onClick={this.onMarkerClick}
                                key={place.id}
                                place_={place}
                                position={{ lat: place.lat, lng: place.lng }}
                            />
                        );
                    })}
                    <InfoWindowEx
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div
                            className="d-flex flex-column justify-content-around"
                            onClick={this.showDetails.bind(this, this.state.selectedPlace)}
                            style={{ height: 80, fontSize: fsc(media, 16), cursor: 'pointer' }}
                        >
                            <div>{this.state.selectedPlace.name}</div>
                            <div style={{ color: 'blue' }} >Organic  Farmer's Organization </div>
                            <div>Online</div>
                        </div>
                    </InfoWindowEx>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDjz91l2P3tnwy9phAWvqEU_V4VPEviW-I"
})(withRouter(withMedia(MapContainer)));