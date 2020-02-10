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

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

class Estatisticas extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={styles.header}>

          <Icon
            name='arrowleft'
            type='AntDesign'
            style={{ marginTop: 50, marginLeft: 10, alignSelf: 'flex-start', color: 'white' }}
          >
            <AeroText>Estatísticas</AeroText>
          </Icon>
          <View style={{ flexDirection: 'row' }}>
            <Button style={styles.button} >
              <AeroText style={styles.textButton} >Ano</AeroText>
            </Button>
            <Button style={styles.button} >
              <AeroText style={styles.textButton} >Mês</AeroText>
            </Button>
            <Button style={styles.button} >
              <AeroText style={styles.textButton} >Semana</AeroText>
            </Button>
          </View>
        </ImageBackground>

        <Content style={styles.content}>
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
        </Content>
      </Container>
    )
  }
}

Estatisticas.navigationOptions = {
  headerShown: false
}

export default Estatisticas

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  content: {
    padding: 10,
  },
  header: {
    alignItems: 'center',
    height: 200,
    justifyContent: 'space-between',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 30,
  },
  button: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: "#ffff",
    width: 100,
    borderRadius: 100,
  },
  textButton: {
    marginTop: 7,
    color: '#F75400'
  },
  buttonList: {
    marginVertical: 8,
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: 'wrap',
    width: 300,
    height: 70,
    backgroundColor: "#ffff",
    borderWidth: 2,
    borderRightWidth: 4,
    borderRadius: 8,
    borderColor: '#ddd',
    borderBottomWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 9,
  },
  item: {
    backgroundColor: 'red',
    flexDirection: 'row',
    backgroundColor: "#ffff",
    height: 50,
    width: 300,
    elevation: 2,
    borderRadius: 10
  },
  iconSeach: {
    margin: 10
  },
  Input: {
    fontSize: 17,
    fontFamily: 'Aero',
  }
});
