import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Container, Content} from 'native-base';
import {connect} from "react-redux";
import * as messageActions from '../../../store/messages/actions';
import ListView from "./components/ListView";
import MessageItem from "./components/MessageItem";

import { AeroText } from '../../../components/StyledText';
import IconSVG from '../../../components/Icon/IconSVG';

class Mensagens extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  componentDidMount = () => this.props.dispatch(messageActions.fetchMessages());

  onRefresh = () => this.props.dispatch(messageActions.fetchMessages());

  render() {
    const { search } = this.state;
    const { messages, refreshing } = this.props;
    console.log(refreshing);
    return (
      <Container style={styles.container}>
        <ImageBackground source={require('../../../assets/images/headerLaranja.png')} style={{}}>
          <View style={styles.header}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-start" }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{paddingTop:5}}>
                  <IconSVG name='Back' height='25' width='25' fill='white' />
                </TouchableOpacity>
                <AeroText style={{ fontSize: 22, color: 'white' }}>   Chat</AeroText>
            </View>
          </View>
        </ImageBackground>
          <ListView
              data={messages}
              onRefresh={this.onRefresh.bind(this)}
              onLoadNext={() => (null)}
              refreshing={refreshing}
              renderItem={({item}) => (
                  <MessageItem
                      message={item}
                      onPress={(params) => this.props.navigation.navigate('Chat', params)}
                  />
              )}
          />
      </Container>
    )
  }
}
function mapStateToProps(state) {
  return {
      messages: state.messages.data,
      refreshing: state.messages.refreshing,
  };
}

export default connect(mapStateToProps, null)(Mensagens)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  content: {
    padding: 20,
    paddingHorizontal: 55
  },
  header: {
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
    paddingTop: 40,
    padding: 20
  },
  bottom: {
    borderRadius: 60,
    backgroundColor: 'red',
    height: 50,
    width: 50,
    marginHorizontal: 10
  },
  buttonList: {
    flex: 1,
    marginVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: "#ffff",
    height: 40,
    width: 300,
    elevation: 2,
    borderRadius: 10
  },
  iconSeach: {
    margin: 10
  },
  Input: {
    fontSize: 15,
    fontFamily: 'Aero',
  },

});
