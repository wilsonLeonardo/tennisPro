import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet
} from 'react-native';
import Modal from "react-native-modal";
import { Divider } from 'react-native-elements';
import IconSVG from '../../../components/Icon/IconSVG';

import { AeroText } from '../../../components/StyledText';

export default class  TeacherDetails extends Component {
    constructor(props){
        super(props)
    }
    render(){
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height
    const {user} = this.props;


    if(!user) return null

    return(
            <View>
                <Modal
                        isVisible={this.props.visible}
                        animationInTiming={300}
                        animationIn="slideInLeft"
                        animationOut="slideOutRight"
                        coverScreen={true}
                        deviceWidth={deviceWidth}
                        deviceHeight={deviceHeight}
                        onTouchEnd={this.props.end}
                        >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: '35%', width: '80%', backgroundColor: 'white', justifyContent: 'space-between', borderRadius: 20 }}>
                            <View style={{ alignItems: "center" }}>
    
                                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', width: 110, height: 110, borderRadius: 200, backgroundColor: 'white', borderWidth: 2, borderColor: '#ddd', marginTop: -40 }}>
                                <View style={styles.priceView}>
                                    <AeroText style={styles.price}>R$ {user.preço}</AeroText>
                                </View>
                                </View>
                                <AeroText style={{ color: 'orange', marginTop:7 }}>
                                {user.club.name}
                                </AeroText>
                            </View>
                            <View style={{paddingHorizontal:20}}>
                                <Divider />
                            </View>
                            <View style={{ alignItems: "center", paddingBottom: "15%", justifyContent:'space-between' }}>
                                
                                <AeroText style={{ fontSize: 20, color: '#455A64' }}>{user.name}</AeroText>
                                <AeroText style={{ color: 'orange', marginTop:10, fontSize: 20 }}>{user.nivel}</AeroText>
                                <View style={{flexDirection:`row`, marginTop:10}}>
                                    <AeroText style={{ fontSize: 15, color: '#455A64'}}>Contato: {user.telefone}
                                    </AeroText>
                                    <View style={{left:'25%'}}>
                                        <IconSVG name='Phone' width='15' height='15' fill='black' />
                                    </View>
                                </View>
    
    
                                {/* <Button style={{ alignSelf: "center", backgroundColor: 'orange', justifyContent: 'center', width: 125, borderRadius: 30, marginTop: 20 }} onPress={this.toggleModal2} >
                                <AeroText style={{ color: 'white' }} >Conversar</AeroText>
                                </Button> */}
    
                            </View>
                            </View>
                        </View>
                        </Modal>
            </View>
        

    )
    }   
}
const styles = StyleSheet.create({
    priceView: {
      backgroundColor: 'green',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent:'center',
      height: 25,
      width: 80
    },
    price: {
      color: 'white',
      fontSize: 12,
    },
    bottomMsg: {
      position: "absolute",
      width: 55, height: 40,
      borderRadius: 50,
      backgroundColor: 'orange',
      justifyContent: "center"
    },
    FitroBottom: {
      width: '100%',
      height: 100,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: 'orange',
      justifyContent: "center"
  
    },
    txtFiltro: {
      color: '#F75400'
    },
    CampeonatosModal: {
      width: '100%',
      height: 80,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: 'orange',
      justifyContent: "center",
    },
    CampeonatosModalTxt: {
      fontSize: 13,
      paddingHorizontal: 10
    },
    CampeonatosModalTxtView: {
      flexDirection: 'row',
      paddingVertical: 10,
      alignItems: 'center'
    }
  
  });
  