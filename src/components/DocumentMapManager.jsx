import { default as React, Component } from "react";

import { GoogleMapLoader, Marker, Polygon, GoogleMap } from "react-google-maps";

import { default as MarkerClusterer } from "react-google-maps/lib/addons/MarkerClusterer";
/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */


class DocumentMapManager extends Component {
  /*
   * 1. Create a component that wraps all your map sub-components.
   */

  //constructor(props) {
  // super(props); 
  //}

  render() {
    /*
     * 2. Render GoogleMap component with containerProps
     */



   let countryPath   = []

    if (this.props.document && this.props.document.country && this.props.document.country.outline)  {
       countryPath = this.props.document.country.outline
    }

    return (
   
 
    <GoogleMapLoader
      containerElement={
        <div
          {...this.props}
          style={{
            height: "100%",
          }}
        />
      }
      googleMapElement={
        <GoogleMap
          ref={(map) => console.log(map)}
          defaultZoom={2}
          defaultCenter={{lat: -32.000, lng: 25.000}}
        >
            

           <Polygon paths={countryPath} ></Polygon>


          
        </GoogleMap>
      }
    />
    
    
    ) 
  }


}

DocumentMapManager.defaultProps = {


  document: undefined

  
}

export default DocumentMapManager

            // {this.props.paths.map(path => (
            //   <Polygon paths={path}></Polygon>
            // ))}

          //   <MarkerClusterer
          //     averageCenter
          //     enableRetinaIcons
          //     gridSize={ 60 }
          //   >
          //     {this.props.markers.map(marker => (
          //       <Marker
          //         position={{ lat: marker.latitude, lng: marker.longitude }}
          //         key={ marker.photo_id }
          //       />
          //     ))}
          // </MarkerClusterer>

