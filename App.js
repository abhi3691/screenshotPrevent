import React from 'react';
import {View, Text, StyleSheet, Button,Dimensions} from 'react-native';
import ScreenShield, { ProtectedView } from 'react-native-screenshield';
const {height,width} = Dimensions.get('window')
export default function App() {
  React.useEffect(() => {
    ScreenShield.init('abdc');
  })
  return (
    <View style={styles.container}>
      <ProtectedView
        source={{
          uri: 'https://yama-guide.com/wp-content/uploads/2019/09/IMG_8819.jpg',
        }}
        style={{width:width, height: height}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
