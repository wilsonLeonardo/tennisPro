import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Text, Button,Segment, Header , Content } from 'native-base';

import { AeroText } from '../../../components/StyledText';

export default function UserDataScreen() {
  return (
    <Content>
      <Header style={{elevation:0, backgroundColor:'#f1f1f1'}}/>
      <View style={{flexDirection:'row', flex:4}}>
        <View style={{alignItems:'flex-start'}}>
          <View style={{backgroundColor:'#F75400', height:20,width:100}}></View>
          <View style={{alignItems:'center'}}>
            <AeroText style={{left:15}}>aaaaaa</AeroText>
          </View>
        </View>
        <View style={{ height:20,width:100, alignItems:'center', left:30, backgroundColor:'#F75400'}}>
          <View style={{backgroundColor:'#F75400',height:20,width:100, left: 5}}></View>
        </View>
        <View style={{ height:20,width:100, alignItems:'flex-end', left:55}}>
          <View style={{backgroundColor:'#F75400', height:20,width:100, left: 5}}></View>
        </View>
      </View>
    </Content>
  );
}

UserDataScreen.navigationOptions = {
  headerShown: false
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center', 
  }
});
