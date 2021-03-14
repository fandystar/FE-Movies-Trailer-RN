import Axios from 'axios'
import React, { useEffect, useState ,Component}  from 'react'
import { View, Image, Text,TextInput, TouchableOpacity, StyleSheet,Dimensions,Modal, ScrollView} from "react-native";
import YouTube from 'react-native-youtube'
// playing video https://api.themoviedb.org/3/movie/297762/videos?api_key=###

//const YTubeApi = 'AIzaSyB5UIIJmtNR8xJ2qrpn6dHzBlLH3c-tyiw'

const YTubeApi = 'AIzaSyB5UIIJmtNR8xJ2qrpn6dHzBlLH3c-tyiw'
const link1VideoId ='https://api.themoviedb.org/3/movie/'
const link2VideoId = '/videos?api_key=a5560efa6ad4fd8537b91dcd4763ee78'
const linkPoster = 'https://image.tmdb.org/t/p/w500'

const PlayYouTubeComponent = (props) => {
    // const [modalVisbile,setModalVisible] = useState(false)
    // const [videoId,setVideoId] = useState(null)
    const {log} =console
    
  
    // const getVideoId  =  async(url1,url2) => {
    //     const r = await Axios.get(url1+props.route.params.movie.id+url2)
    //            //.then(r=> setVideoId(r.data.results[0].key))
    //            let id  = r.data.results[0].key
    //            setVideoId(id)

    //            //setVideoId(r.data.results[0].key)
    //           // "sfM7_JLk-84"
    //    // log('video id : ',r.data.results[0].key)
    //             //log('video id : ',id)


    // }
    // // 464052
    // //log("movie : ",props.movie)                                                                                                                                                                                                                                    
    // log("movie id Play: ",props.route.params.movie.id) 
    // getVideoId(link1VideoId,link2VideoId)
    log("props : ",props.route.params.videoId)
    return (
        <View>
            <YouTube
                apiKey={YTubeApi}
                videoId={props.route.params.videoId} // The YouTube video ID
                play={true}  // control playback of video with true/false
                 
                //fullscreen // control whether the video should play in fullscreen or inline
                //loop // control whether the video should loop when ended
                // onReady={e => this.setState({ isReady: true })}
                // onChangeState={e => this.setState({ status: e.state })}
                //nChangeQuality={e => this.setState({ quality: e.quality })}
                // onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300 }}
            />
             <View style = {styles.ViewScreen}>
                                                <View style ={styles.viewModal} >
                                                    <Text style={{fontSize:20,fontWeight:'bold'}}>{props.route.params.movie.title}</Text>
                                                    
                                                    <Text style={{fontSize:20,fontWeight:'bold'}}>Release Date :  {props.route.params.movie.release_date}</Text>
                                    
                                                    <Text style={styles.bodyCommentText} multiline ={true}>{props.route.params.movie.overview}</Text>
                                                  
                                    
                                                </View>
                                            </View>
         
        </View>
    )
}
const styles = StyleSheet.create({
    allignFooterImage : {
        top:10,
        left:40,
        flexDirection :'row'
    },
    commentImage :{
        marginRight : 10,
        //top : 295,
        //left : 20,
        width:40,
        height : 40,
    },
    sumOfCommentsImage : {
        marginTop :5,
        marginRight : 200,
        height :40,
        fontSize : 20,
        fontWeight :'bold',
    },
    shareImage :{
        width:40,
        height : 40,
    },
    card : {
        backgroundColor:'white',
        height:600,
        width: 400,
        borderRadius : 15,
        marginBottom : 15,
    },
    itemImage1: {
        position :'absolute',
        top : 10,
        left :20,
        justifyContent :'center',
        height: 260,
        width: 360,
    },
    starfilledImage: {
        height: 35,
        width: 35,
    },
    staremptyImage: {
        height: 35,
        width: 35,
    },
      
    itemImage2: {
        left :20,
        justifyContent :'center',
        height: 215,
        width: 100,
    },
    itemTitle: {
        height : 24,
        fontWeight: 'bold',
        fontSize: 20,
    },
    itemYear: {
        height : 24,
        fontWeight: 'bold',
        fontSize: 20,
    },
    
    line1 : {
         top : 0,
         width:400,
         height:0 ,
         borderBottomWidth :1,
         marginTop:5,
         marginBottom:5,
    },
    line2 : {
         top : 7,
         width:400,
         height:0 ,
         borderBottomWidth :1,

    },
    ViewScreen :{
        alignItems :'center',
        //backgroundColor :'gray',
        justifyContent:'center',
        flex:1,
    },
    viewModal : {
        //flex :1,
        marginTop : 390,
        width :400,
        height :390,
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
        padding:5,
        textAlignVertical :'top',
        borderRadius : 10,
      //  marginBottom :20,
        marginTop:3,
        fontSize :18,
        height :'83%' ,
        width:'98%',
    },
})

export default PlayYouTubeComponent
