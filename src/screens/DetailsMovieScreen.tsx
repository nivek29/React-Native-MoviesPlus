import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Dimensions, Image, StyleSheet, View, Text, ScrollView } from 'react-native';

import { RootStackParams } from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams,'DetailsMovieScreen'>{};


export const DetailsMovieScreen = ( {route} : Props )=> {
    
    const movie = route.params;

    const { width:windowWidth } = Dimensions.get('window');
    const urlImage = 'https://image.tmdb.org/t/p/w500/'+ movie.poster_path;

    return (
        <ScrollView style={{backgroundColor:'#121317'}}>
            <View style={ styles.content } >
                <View style={styles.contentImage}>
                    <Image 
                        style={styles.image}        
                        source={{ uri: urlImage}} >
                    </Image>
                </View>
                

                <View style={styles.contenMovieInfo}>
                    <View style={styles.contenDescription}>
                        <View style={styles.contenTitle}>
                            <Text  style={styles.title}>{movie.title}</Text>
                            <Text  style={styles.subtitle}>{movie.original_title}</Text>
                        </View>
                        
                        <View style={styles.contenResume}>
                            <Text style={styles.resume} >{movie.overview}</Text>
                        </View>
                        <View style={styles.contenRelease}>
                            <Text style={styles.release}  >Date release: {movie.release_date}</Text>
                        </View>
                        
                        
                    </View>
                </View>

                

            </View>
        </ScrollView>

        
    )




};

const styles = StyleSheet.create({
    content:{
        flex:1,
        backgroundColor: '#121317',
        
    },
    contentImage:{
        flex:1,
        alignItems: 'center'
    },
    image:{
        borderColor:'gray',
        borderWidth:2,
        width:320,
        height:450,
        marginHorizontal:20,
        marginVertical:20,
        borderRadius:15,
        
        
    },
    
    contenMovieInfo:{
        marginHorizontal:5,
        borderColor:'gray',
        borderBottomWidth:1,
        padding:8,
        marginBottom:15,
        marginTop:10
    },
    contenDescription:{
        
    },
    contenTitle:{
        alignItems:'center',
    },    
    title:{
        
        color:'gray',
        fontSize:36,
        fontWeight: 'bold'
    },
    subtitle:{
        color:'gray',
        fontSize:12,
        fontWeight: 'bold'
    },
    contenResume:{
        marginTop:10,
        
    },
    resume:{
    
        textAlign:'justify',
        fontSize:18,
        color:'gray'
    },
    contenRelease:{
    },
    release:{
        textAlign:'right',
        fontSize:20,
        fontWeight:'bold',
        color:'gray',
        marginTop:10
    },
    

});