
import Axios from 'axios'
import React, { useEffect, useState ,Component}  from 'react'
import { Text,View,StyleSheet,TouchableOpacity, FlatList} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ListGenreMovieComponent from '../components/ListGenreMovieComponent'  
import ListMovieComponent from '../components/ListMovieComponent'
import TextInputComponent from '../components/TextInputComponent'
import { Searchbar } from 'react-native-paper'
import RadioForm from 'react-native-simple-radio-button'
const link1MoviesByCategory = 'https://api.themoviedb.org/3/movie/'
const link2MoviesByCategory= '?api_key=a5560efa6ad4fd8537b91dcd4763ee78'
const linkGenresMovie = 'https://api.themoviedb.org/3/genre/movie/list?api_key=da06bc5bd57ed7dfd2653656d7890fbc&language=en-US'
const linkMoviesBySearch='https://api.themoviedb.org/3/search/movie?api_key=a5560efa6ad4fd8537b91dcd4763ee78&query=,'
const linkMoviesByGenre = 'https://api.themoviedb.org/3/discover/movie?api_key=a5560efa6ad4fd8537b91dcd4763ee78&with_genres=,'
import TouchableOpacityComponent from '../components/TouchableOpacityComponent'
import { set } from 'react-native-reanimated'


const HomeScreen = (props) => {
    const [search, setSearch] = useState('')
    const [moviesBySearch,setMoviesBySearch] = useState([]) 
    const [genresMovie,setGenresMovie] = useState([]) 
    const [moviesByCategory,setmoviesByCategory] = useState([])
   // const [searchQuery, setSearchQuery] = useState('')
   // const [,set] = useState([])
    const [category,setCategory] = useState('Upcoming')
    const [index,setIndex] = useState(0)
    const [moviesByGenre,setMovieByGenre] = useState([])
    const [selected,setSelected] = useState('')
    const [genre,setGenre] = useState('')
    

    const dataCategory = [
        {id:1,text:'now_playing',label:'Now Playing'},
        {id:2,text:'upcoming',label:'Upcoming'},
        {id:3,text:'popular',label:'Popular'},
        {id:4,text:'top_rated',label:'Top Rated'},
        
    
    ]   


    useEffect(() => {
        getGenresMovie(linkGenresMovie)
        getMoviesByCategory(link1MoviesByCategory,dataCategory[1].text,link2MoviesByCategory) 
        
     },[])
   
    // ambil data film  berdasarkan search  textinput
    const getMoviesBySearch  =  (url,search) => {
        Axios.get(url+search)
        .then(r =>  setMoviesBySearch(r.data.results))
        
    } 
     
    // ambil film berdasarkan genre 
    const getMoviesByGenre  =  (url,id) => {
        Axios.get(url+id)
        .then(r =>  setMovieByGenre(r.data.results))
    }
    
    //ambil data genre films
    const getGenresMovie  =  (url) => {
        Axios.get(url)
        .then(r=> setGenresMovie(r.data.genres))
    }       
    
    // ambil data film berdasarkan kategori= 'popular,now_playing ,dll'
    const getMoviesByCategory  =  (url1,category,url2) => {
        Axios.get(url1+category+url2)
        .then(r=> setmoviesByCategory(r.data.results))
    }
    let radio_props = [
        {label: 'Now Playing', value: 0 },
        {label: 'Popular', value: 1 },
        {label: 'Top Rated', value: 2 },
        {label: 'Upcoming', value: 3 },
      
    ]
    //props.route.params ? set(props.route.params.movies) : set([]) 
    //console.log('almero')   
    return (
        
        <View style ={styles.container}>
            <ScrollView>
            
            <View>
                {/* <TextInputComponent  
                    width = {true}
                    borderRadius = {true}
                    borderBottomWidth = {false}
                    ph='judul film'
                    input ={search}
                    handleOnChangeText = { (input) => {
                                            setSearch(input)  
                                             getMoviesBySearch(linkMoviesBySearch ,input) }
                                         }
                /> */}
               
                
                 <Searchbar
                            icon={require('../sample/images/loupe.png')}
                            placeholder="movie title"
                            onChangeText={
                                (search) => {
                                    setSelected('')
                                    setSearch(search)  
                                    getMoviesBySearch(linkMoviesBySearch ,search) }
                            }
                            style={{ fontSize:5,width: '100%', height:45,marginHorizontal:0,marginVertical:5  }}
                            value={search}
                        />
            </View>
            {/* <View style ={styles.header}>
                <Text style={{fontWeight:'bold',fontSize :20,marginRight:50}} >Best Genres</Text>
                <TouchableOpacity>
                    <Text style={{marginLeft:170,color:'blue'}}>more..</Text>
                </TouchableOpacity>
            </View> */}
             <Text style ={{fontSize:20,margin:2}}>
               Selected Category : {category}   
            </Text>
            <FlatList
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                        data={dataCategory}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=>{
                        //const backgroundColor = item.id === selected ? 'black' : '#34ace0'
                        return (
                            <View>
                            <TouchableOpacityComponent
                                backgroundColor ={item.id === selected ? 'black' : '#34ace0'}
                                caption={item.label}
                                handleOnPress= {()=>{
                                    setSelected(item.id)
                                    getMoviesByCategory(link1MoviesByCategory,item.text,link2MoviesByCategory) 
                                    setCategory(item.label)
                                    setGenre('')
                                } }
                            />
                            </View>
                        )  
                        }
                    }
            />
          
                        {/* <TouchableOpacityComponent
                            caption ={'Top Rated'}
                            handleOnPress ={()=>
                                {
                                getMoviesByCategory(link1MoviesByCategory,'top_rated',link2MoviesByCategory) 
                                setCategory('yes')
                                }
                            }marg
                        /> */}
               
                <Text style ={{fontSize:20,margin:2}}>
               Selected Genre : {genre} 
            </Text>

            <View >
                {/* // tampilkan data gendre di home screen dengan komponen ListGenreMovieComponent  */}
                
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    //numColumns='1'
                    keyExtractor={ (key) => key.id }
                    data={genresMovie}
                    // renderItem={ ({item}) => <ListGenreMovieComponent 
                    //   go={props.navigation.navigate}  genre ={item}   />}
               
                    renderItem={ ({item}) =>    <TouchableOpacityComponent 
                                                    backgroundColor ={item.id === selected ? 'black' : '#34ace0'} 
                                                    marginHorizontal = {1.5}
                                                    caption={item.name}   
                                                handleOnPress ={ () =>{ 
                                                    
                                                    getMoviesByGenre(linkMoviesByGenre,item.id)
                                                    setSelected(item.id)
                                                    setCategory('')
                                                    setGenre(item.name)
                                                    //movies()
                                                    //console.log('item id ',item.id)
                                                    //console.log('nama id ',item.name)
                                                    
                                                    
                                                    //console.log('movies by genre ',moviesByGenre)
                                                // props.go('Home',{movies: moviesByGenre,category:'' })                                
                }
                }

             /> }
               
               
               />
                
            </View>
                   
            
            
            
            
            
            {/* <RadioForm
                            radio_props={radio_props}
                            initial={index===0? 0 :radio_props[index.value].value}
                            onPress={value => { 
                                                setIndex({value:value})
                                            let label=''  
                                            if (value === 0) {
                                                  label = 'now_playing'
                                            } else if(value===1) {
                                                label = 'popular'
                                            }  else if(value===2) {
                                                label = 'top_rated'
                                            }  else {
                                                label = 'upcoming'
                                            } 
                                         
                                          //alert(category)
                                            getMoviesByCategory(link1MoviesByCategory,label,link2MoviesByCategory) 
                                            setCategory(label)
                                            //props.route.params ? setCategory('')  : setCategory(label)
                                            //  handleSortData(value)
                                               // setModalVisible(!modalVisible)
                            // style={{fontSize:18}}                        
                                   }}           
                    />             */}
            <View>
                 {/* // tampilkan data movie( pada saat masuk home,filter & search
                 ) di home screen dengan komponen ListMovieComponent  */}
                <FlatList
                    horizontal
                    keyExtractor={ key => key.id }
                     data={ 
                           // props.route.params.movies
                           //props.route.params && props.route.params.moviesBygenre ? 
                           //props.route.params.moviesBygenre : []
                           //search ? moviesBySearch : props.route.params ?
                           // props.route.params.movies : moviesByCategory
                             search ? moviesBySearch : category ? moviesByCategory : moviesByGenre
                            // moviesByCategory : props.route.params ? props.route.params.movies : [] 
                          
                       
                       
                        }                        
                    renderItem={ ({item}) => 
                            
                            <ListMovieComponent  go={props.navigation.navigate}   movie={item} />
                    
                    }
                />
            
                <Text style ={{fontSize:15,padding:5,alignSelf:'center',color:'blue'}}>
                    fandyarayalin@gmail.com  0812 7 8 9 10 11
                </Text>
            

            </View>
            </ScrollView>                        
        </View>
    ) 
    }

const styles = StyleSheet.create (
    {
        container : {
            flex :1,
            //justifyContent :'center',
            alignItems: 'center',
        } ,
        containerTouchOpacity : {
            justifyContent: 'center',
            display: 'flex',
            flexDirection :'row',
        },
        header : {
            margin:5,
            flexDirection :'row',
        }
    }
)
export default HomeScreen
