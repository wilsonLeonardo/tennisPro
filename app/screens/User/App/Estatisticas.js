import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import { Form, Button, Item, Input, Header, Container, Content, Icon, Footer } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { AeroText } from '../../../components/StyledText'
import IconSVG from '../../../components/Icon/IconSVG';
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import ProgressCircle from 'react-native-progress-circle'

class Estatisticas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: {
        ano: false,
        mes: false,
        semana: false
      }
    }
  }
  render() {
    const data = [10, 25, 15, 30, 5, 20]
    const dataX = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
    
    const contentInset = { top: 20, bottom: 20 }
    return (
      <Container style={styles.container}>
        <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-start" }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ paddingTop: 5 }}>
              <IconSVG name='Back' height='25' width='25' fill='white' />
            </TouchableOpacity>
            <AeroText style={{ fontSize: 22, color: 'white' }}>   Estatísticas</AeroText>
          </View>
        </ImageBackground>
        <ScrollView>

          <View style={{ flexDirection: 'row', flex: 1, paddingBottom: 20, justifyContent: "space-around" }}>
            <Button
              style={this.state.type.ano ? styles.buttonPress : styles.button}
              onPress={this.state.type.ano ? () => this.setState({ type: { ano: false } }) : () => this.setState({ type: { ano: true } })}
              value={this.state.type.ano}
            >
              <AeroText style={this.state.type.ano ? styles.textButtonPress : styles.textButton} >Ano</AeroText>
            </Button>
            <Button
              style={this.state.type.mes ? styles.buttonPress : styles.button}
              onPress={this.state.type.mes ? () => this.setState({ type: { mes: false } }) : () => this.setState({ type: { mes: true } })}
              value={this.state.type.mes}
            >
              <AeroText style={this.state.type.mes ? styles.textButtonPress : styles.textButton} >Mês</AeroText>
            </Button>
            <Button
              style={this.state.type.semana ? styles.buttonPress : styles.button}
              onPress={this.state.type.semana ? () => this.setState({ type: { semana: false } }) : () => this.setState({ type: { semana: true } })}
              value={this.state.type.semana}
            >
              <AeroText style={this.state.type.semana ? styles.textButtonPress : styles.textButton} >Semana</AeroText>
            </Button>
          </View>
          <View style={styles.content}>
            <View>
              <View style={{ height: 300, flexDirection: 'row' }}>
                <YAxis
                  data={data}
                  contentInset={contentInset}
                  svg={{
                    fill: 'grey',
                    fontSize: 10,
                  }}
                  numberOfTicks={6}
                  formatLabel={(value) => `${value}`}
                />

                <LineChart
                  style={{ flex: 1, marginLeft: 16 }}
                  data={data}
                  svg={{ stroke: '#F75400', strokeWidth:5 }}
                  contentInset={contentInset}
                >
                  <Grid direction='BOTH' />
                </LineChart>


              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>

                  <View>
                    <AeroText style={{ fontSize: 35, color: "#F75400" }}>73%</AeroText>
                    <AeroText style={{ fontSize: 20, color: "#F75400" }}>De Vitórias</AeroText>
                  </View>

                  <View>
                    <AeroText style={{ fontSize: 35, color: "#bbb" }}>27%</AeroText>
                    <AeroText style={{ fontSize: 20, color: "#bbb" }}>De Derrotas</AeroText>
                  </View>
                </View>

                <ProgressCircle
                  percent={73}
                  radius={80}
                  borderWidth={15}
                  color="#F75400"
                  shadowColor="#ddd"
                  bgColor="#fff"
                >
                  <AeroText style={{ fontSize: 25, color: "#F75400" }}>{'216'}</AeroText>
                  <AeroText style={{ fontSize: 18, color: "#F75400" }}>Jogos</AeroText>
                </ProgressCircle>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    )
  }
}

export default Estatisticas

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff"
  },
  content: {
    padding: 20,
  },
  header: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
    paddingTop: 40,
    padding: 20,
  },
  button: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: "#E2E2E2",
    width: 100,
    borderRadius: 100,
  },
  buttonPress: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: "#F75400",
    width: 100,
    borderRadius: 100,
  },
  textButton: {
    color: 'gray'
  },
  textButtonPress: {
    color: 'white'
  },
});
