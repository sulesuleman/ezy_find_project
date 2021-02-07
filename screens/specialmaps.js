import  React,{Component} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

import { Marker } from 'react-native-maps';
 
export default class SpecialMaps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapRegion: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0999,
                longitudeDelta: 0.0999,
              },  
              markers: [
                {
                  coordinate: {
                    latitude: 37.78825,
                longitude: -122.4324,
                  },
                  title: "Best Place",
                  description: "This is the best place in Portland",
               
                },
                {
                  coordinate: {
                    latitude: 37.78825,
                    longitude: -122.6655507,
                  },
                  title: "Second Best Place",
                  description: "This is the second best place in Portland",
               
                },
                {
                  coordinate: {
                    latitude: 37.78825,
                    longitude: -122.6701034,
                  },
                  title: "Third Best Place",
                  description: "This is the third best place in Portland",
            
                },
                {
                  coordinate: {
                   latitude: 37.78825,
                    longitude: -122.6561917,
                  },
                  title: "Fourth Best Place",
                  description: "This is the fourth best place in Portland",
                
                },
              ],
        }
    }

      onRegionChange=(region)=> {
        this.setState({ mapRegion:region });
      }
    render() {
        return (
            <View style={styles.container}>
      <MapView style={styles.map} 
   region={this.state.mapRegion}
   onRegionChange={this.onRegionChange}
   >
        {this.state.markers.map(marker => (
    <Marker
      coordinate={marker.coordinate}
      title={marker.title}
      description={marker.description}
    />
  ))}
    </MapView>
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})