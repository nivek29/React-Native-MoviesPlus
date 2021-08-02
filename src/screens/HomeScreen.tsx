import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import { ActivityIndicator, Button, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import React from 'react';

import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMoviesList';
import { SliderHorizontal } from '../components/SliderHorizontal';

export const HomeScreen = () => {

    const navigation = useNavigation();
    const { listMovies , isLoad} = useMovies();
    const  { top } = useSafeAreaInsets();

    const { width:windowWidth } = Dimensions.get('window');

    if(isLoad){
        return(
            <View style={{flex: 1, justifyContent: 'center' , alignContent: 'center'}}>
                <ActivityIndicator color="#4078AE" size="large">

                </ActivityIndicator>
            </View>
        )

    }
    return (
        
        <ScrollView style={{backgroundColor:'#121317' }}>
            <View style={{ height:460, marginVertical:10, backgroundColor:'#121317'}}>
                <Carousel 
                    data={listMovies.nowPlaying} 
                    renderItem={ ({item }: any ) => <MovieCard movie= {item}/>}
                    sliderWidth={windowWidth} 
                    itemWidth={300}
                    inactiveSlideOpacity={0.8}>
                        
                </Carousel>
                
            </View>
            <View style= {{backgroundColor:'#121317' ,height:245,marginTop:13}}>
                <SliderHorizontal title ='Most popular movies' movie={ listMovies.popular } ></SliderHorizontal>
            </View>
            <View style= {{backgroundColor:'#121317' ,height:230,marginTop:13}}>
                <SliderHorizontal title ='Top movies' movie={ listMovies.topRated } ></SliderHorizontal>
            </View>
            <View style= {{backgroundColor:'#121317' ,height:230,marginTop:13}}>
                <SliderHorizontal title ='Upcoming movies' movie={ listMovies.upcoming } ></SliderHorizontal>
            </View>
            
            
        </ScrollView>
        
        
    )
}
