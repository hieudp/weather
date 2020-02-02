import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  render() {
    return (
      <div style={{ height: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCoZDRD-46iKcvlUqT7oGsxjIzlBwcdov0' }}
          defaultCenter={{lat: this.props.lat, lng: this.props.lon}}
          defaultZoom={10}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
  