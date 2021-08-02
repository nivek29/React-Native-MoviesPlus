import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Result } from '../interface/MovieInterface'
import { MovieCard } from './MovieCard'

interface Props{
    movie: Result[],
    title: String
}
//54465162
export const SliderHorizontal = ({ movie, title } : Props) => {
    
    return (
        <View>
            {
                title && <Text style={styles.title}>{title}</Text>
            }
           
           <FlatList
                data={ movie }
                renderItem={ ({ item }: any) => (
                    <MovieCard movie={ item } width={ 140 } height={ 200 } />
                )}
                keyExtractor={ (item) => item.id.toString() }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        marginBottom:5,
        fontSize:25,
        fontWeight:'600',
        color: 'white'
    }
})
