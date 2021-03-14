import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

const TouchableOpacityComponent = (props) => {
    let marginHorizontal= props.margiHorizontal || 0
    let backgroundColor = props.backgroundColor || '#34ace0'
    let height=props.height || 45
    return (
        <View >
            <TouchableOpacity 
               // {...props}
                style = {[styles.cssTouchableOpacity,
                    {marginHorizontal,backgroundColor,height}]}
                onPress = {props.handleOnPress}
            >  
            <Text style={styles.cssText}>{props.caption}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
         cssTouchableOpacity : {
            borderRadius : 40/2,
            padding:5,
            height : 45,
            width : 103 ,
            alignItems: 'center',
            justifyContent : 'center',
            //color :'white',
            //backgroundColor: '#34ace0',
            marginRight : 3,
            //marginTop : 10,
            //marginBottom: 10,             
         },
        cssText : {
            fontWeight :'bold',
            color :'white',
            fontSize: 16,
        }               
    }
)


export default TouchableOpacityComponent
