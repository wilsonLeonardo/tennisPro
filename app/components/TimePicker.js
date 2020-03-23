import React, { useState } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
  } from 'react-native';
    import {Button, Text} from 'native-base'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AeroText } from "./StyledText";

export function TimePicker(props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View style={{marginTop:30}}>
        <Button transparent  onPress={showDatePicker}>
  <AeroText style={styles.title}>{`${props.placeholder}`}</AeroText>
          </Button>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        color:'#000',
    },
    caixa: {
        flexDirection:'row',
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

