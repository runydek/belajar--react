import React, {Component} from "react";
import {Image, Text, TextInputBase, View} from 'react-native';

class MateriFlexbox extends Component {
    render () {
      return (
        <View>
            <View style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent: 'space-between'
            }}>

        <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
        <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
        <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
        <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />

        </View>
           
        <View style={{
            flexDirection: "row",
            justifyContent: "space-around",

        }}>
            <Text>Beranda</Text>
            <Text>Video</Text>
            <Text>Playlist</Text>
            <Text>Komunitas</Text>
            <Text>Channel</Text>
            <Text>Tentang</Text> 
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>  
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/id/d/d5/Aang_.jpg'}} style={{width: 100, height:100, borderRadius:50, marginRight: 14 }} />
        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Aanng</Text>
            <Text>1000000000 subscriber</Text>
        </View>
        </View>

        </View>
       

      )
    }
}

export default MateriFlexbox;