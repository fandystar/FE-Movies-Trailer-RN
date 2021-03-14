
import { useScrollToTop } from '@react-navigation/native'
import React, { useState ,useEffect} from 'react'
import { View, Text } from 'react-native'
import TouchableOpacityComponent from './TouchableOpacityComponent'
import Axios from 'axios'
const linkMoviesByGenre = 'https://api.themoviedb.org/3/discover/movie?api_key=a5560efa6ad4fd8537b91dcd4763ee78&with_genres=,'


const ListGenreMovieComponent = (props) => {
    const [moviesByGenre,setMovieByGenre] = useState([])
      
    useEffect(() => 
         movies()            
        
    , []) 
       
   const movies = () => {
      Axios.get(linkMoviesByGenre+props.genre.id)
      .then ( r => setMovieByGenre(r.data.results))
         } 
   
    return (
        <View >
            <TouchableOpacityComponent 
                margin = {1.5}
                caption={props.genre.name}   
                handleOnPress ={ () =>{ 
                    
                     movies()
                     //console.log(moviesByGenre)
                    
                     props.go('Home',{movies: moviesByGenre,category:'' })                                
                }
                }

             /> 
        </View>
    )
}

export default ListGenreMovieComponent
