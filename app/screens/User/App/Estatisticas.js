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

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

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
              <LineChart
                data={{
                  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                  datasets: [
                    {
                      data: [
                        5,
                        10,
                        15,
                        20,
                        25,
                        30
                      ]
                    }
                  ]
                }}
                width={Dimensions.get("window").width}
                height={220}
                chartConfig={{
                  backgroundGradientFrom: "white",
                  backgroundGradientTo: "white",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(247, 84, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(128, 129, 130, ${opacity})`,
                  strokeWidth: "10",
                  stroke: "#F75400",
                  propsForDots: {
                    r: "0"
                  }
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />
              <ProgressChart

                data={{
                  data: [0.73]
                }}
                width={Dimensions.get("window").width}
                height={220}
                chartConfig={{
                  backgroundGradientFrom: "white",
                  backgroundGradientTo: "white",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 0) => `rgba(247, 84, 0, ${opacity})`,
                  labelColor: (opacity = 0) => `rgba(128, 129, 130, ${opacity})`,

                  propsForDots: {
                    r: "3",
                    strokeWidth: "20",
                    stroke: "#F75400",
                  }
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
                hideLegend={false}
              />
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
    alignItems: "center"
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
