import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ms} from 'react-native-size-matters';

export default function Header() {
  return (
    <View style={styles.global}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('./../Assets/Image/logo.png')}
            style={{height: ms(56), width: ms(56), marginLeft: ms(8)}}
          />
        </View>
        <View style={styles.containerTitle}>
          <Text
            style={{
              fontSize: ms(18),
              color: 'black',
              fontWeight: '700',
              marginTop: ms(8),
            }}>
            TOKO
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    height: ms(64),
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderBottomColor: 'black',
  },
  container: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  containerTitle: {
    marginTop: ms(12),
  },
});
