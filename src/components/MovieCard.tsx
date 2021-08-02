import React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Result } from '../interface/MovieInterface';
import { useNavigation } from '@react-navigation/native';

interface Props{
    movie: Result;
    height?: number;
    width?: number;
}

export const MovieCard = ({ movie, height = 450, width = 300 } : Props) => {

    const urlImag = 'https://image.tmdb.org/t/p/w500/'+ movie.poster_path;
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            style={ {
                width, 
                height,
                marginHorizontal:8,
            }} 
            activeOpacity= {0.9}
            onPress = { () =>{
                navigation.navigate('DetailsMovieScreen', movie)
            }} 
            >
            <View style={styles.containerShadow}>
                <Image style={styles.image} source={{ uri: urlImag}} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex:1,
        borderRadius:14,
        borderColor:'gray',
        borderWidth:2
    },
    container:{
        
    },
    containerShadow:{
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7.00,
        borderRadius:14,
        elevation: 10,
    }
});
