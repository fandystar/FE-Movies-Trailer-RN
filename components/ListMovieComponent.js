import React, { useEffect, useState ,Component}  from 'react'
import { View, Image, Text,TextInput, TouchableOpacity, StyleSheet,Dimensions,Modal, ScrollView} from "react-native";
import Axios from 'axios'
import shareImage from './../sample/images/shareImage.png'
import commentImage from './../sample/images/commentImage.png'
import TouchableOpacityComponent from './TouchableOpacityComponent'
import starfilledIMage from './../sample/images/starfilledImage.png'
import staremptyImage from './../sample/images/staremptyImage.png'



const link = 'https://image.tmdb.org/t/p/w500'

const YTubeApi = 'AIzaSyB5UIIJmtNR8xJ2qrpn6dHzBlLH3c-tyiw'
const link1VideoId ='https://api.themoviedb.org/3/movie/'
const link2VideoId = '/videos?api_key=a5560efa6ad4fd8537b91dcd4763ee78'
const linkPoster = 'https://image.tmdb.org/t/p/w500'

const ListMovieComponent = (props) => {
    const [modalVisbile,setModalVisible] = useState(false)
    const [selected,setSelected] = useState('')
    //const [videoId,setVideoId] = useState(null)
    const {log} =console
    let rating=5
    return (
        <View style={styles.card}  >
                      
                    <TouchableOpacity
                        onPress = { async() =>{
                                // props.go('Details',{movie :props.movie}) 
                               // log("movie : ",props.movie)
                                const r = await Axios.get(link1VideoId+props.movie.id+link2VideoId)
                                //.then(r=> setVideoId(r.data.results[0].key))
                               // log("video id : ",r.data.results[0].key)
                                
                                //setVideoId(r.data.results[0].key)
                                props.go('Play',{  videoId : r.data.results[0].key,
                                    movie:props.movie})
                                // props.go('ListDetails',{id:props.movie.id})
                                }
                        } >
                        <Image
                            source={{ uri: link+props.movie.poster_path}}
                            style={styles.itemImage}
                        />
                    </TouchableOpacity>
                     
                    <Text style={styles.itemTitle}>{props.movie.title}</Text>
                   
                    <View style= {styles.line}/>
                    <Text style={styles.itemTitle}>{props.movie.release_date}</Text>
                    
                    
                    <TouchableOpacityComponent 
                        backgroundColor ={props.movie.id === selected ? 'black' : '#34ace0'} 
                        caption={'Synopsis'}   
                        handleOnPress ={ () =>{ 
                            //alert(props.movie.id)
                            //setSelected(props.movie.id)
                            setModalVisible(true)
                        }
                        }
                    /> 
                   <Modal 
                                            transparent = {true}
                                            visible = {modalVisbile}
                                            animationType ='slide'
                                        >
                                            <View style = {styles.ViewScreen}>
                                                <View style ={styles.viewModal} >
                                                    <Text style={{fontSize:20,fontWeight:'bold'}}>{props.movie.title}</Text>
                                                    
                                                    <Text style={{fontSize:20,fontWeight:'bold'}}>Release Date :  {props.movie.release_date}</Text>
                                    
                                                    <Text style={styles.bodyCommentText} multiline ={true}>{props.movie.overview}</Text>
                                                   <TouchableOpacityComponent
                                                            caption={'Close'}
                                                            handleOnPress= {
                                                                () => {
                                                                    setModalVisible(!modalVisbile)
                                                                }
                                                                }
                                                    >               
                                                    </TouchableOpacityComponent>
                                    
                                                </View>
                                            </View>
                                        </Modal>
                   
            
        </View>
    )
}


const styles = StyleSheet.create({
   
    itemContainer: {
        //width: DEVICE.width * 0.8,
        justifyContent: 'center',
    },
    card : {
       // margin: 5,
        marginHorizontal:5,
        marginTop:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#DDDDDD',
        height:545,
        width: 200,
        borderRadius : 15,
        //marginBottom : 15,
    },
    itemImage: {
      marginTop:5, 
       justifyContent :'center',
        height: 415,
        width: 180,
    },
    itemTitle: {
           margin:6,
        height : 24,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    
    line : {
       width : 180,
         height:0 ,
         borderBottomWidth :0.5,

    },
    ViewScreen :{
        alignItems :'center',
        //backgroundColor :'gray',
        justifyContent:'center',
        flex:1,
    },
    viewModal : {
        //flex :1,
        marginTop : 330,
        width :400,
        height :450,
        borderRadius :20,
        justifyContent:'center',
        alignItems:'center',
        //borderBottomWidth:2,
       // padding : 135,
        backgroundColor : '#CAD3C8'
    },
    headerCommentText : {
        backgroundColor:'white',
        color:'black',
        borderRadius : 10,
        marginTop :20,
        marginBottom:20,
        fontSize :20,
        height :40 ,
        width:320,
    },
    bodyCommentText : {
        backgroundColor:'white',
        color:'black',
        textAlignVertical :'top',
        borderRadius : 10,
        margin :10,
        padding:5,
        fontSize :18,
        height :320 ,
        width:370,
    },
    
})

export default ListMovieComponent
