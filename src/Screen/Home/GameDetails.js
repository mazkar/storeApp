import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ms} from 'react-native-size-matters';

import {useDispatch, useSelector} from 'react-redux';
import LoadingComp from '../../Component/LoadingComp';
import {getGameDetail} from './Reducer/HomeAction';

import Header from '../../Component/Header';

export default function GameDetails(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGameDetail());
  }, [dispatch]);

  const load = useSelector(state => state.GlobalReducer.loading);
  const data = useSelector(state => state.HomeReducer.gameDetail);
  return (
    <>
      <SafeAreaView style={styles.global}>
        {load ? (
          <LoadingComp />
        ) : (
          <>
            <ScrollView>
              <View>
                <View style={styles.containerImage}>
                  <Header />
                  <Image
                    source={{uri: `${data.background_image}`}}
                    style={styles.imageBackground}
                  />
                </View>

                <View style={styles.containerTitle}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: ms(16),
                        color: '#8e8e8e',
                        fontWeight: '500',
                      }}>
                      Developers:
                    </Text>
                    {data?.developers ? (
                      data?.developers?.map((e, i) => {
                        return (
                          <>
                            <Text
                              style={{
                                fontSize: ms(16),
                                color: '#8e8e8e',
                                fontWeight: '500',
                              }}
                              numberOfLines={1}>
                              {e.name},
                            </Text>
                          </>
                        );
                      })
                    ) : (
                      <>
                        <Text>sadasf</Text>
                      </>
                    )}
                  </View>

                  <Text
                    style={{
                      fontSize: ms(32),
                      fontWeight: '500',
                      color: 'white',
                    }}
                    numberOfLines={4}>
                    {data.name}
                  </Text>
                  <View style={styles.containerGenre}>
                    {data?.genres ? (
                      data?.genres.map((e, i) => {
                        return (
                          <>
                            <View style={styles.genre}>
                              <Text style={{color: 'white', fontWeight: '500'}}>
                                {e.name}
                              </Text>
                            </View>
                          </>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </View>
                  <View style={styles.containeEsrb}>
                    <Text
                      style={{
                        fontSize: ms(16),
                        color: '#8e8e8e',
                        fontWeight: '500',
                      }}>
                      {data?.esrb_rating?.name}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.containerAbout}>
                <View>
                  <Text
                    style={{
                      fontSize: ms(24),
                      fontWeight: '700',
                      color: 'white',
                    }}>
                    About
                  </Text>
                </View>
                <View style={{marginTop: ms(4)}}>
                  <Text style={{fontSize: ms(14), color: 'white'}}>
                    {data.description_raw}
                  </Text>
                </View>
              </View>
            </ScrollView>
          </>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  global: {
    flex: 1,
    backgroundColor: '#151515',
  },
  imageBackground: {
    height: ms(530),
    width: ms(380),
    opacity: 0.3,
    position: 'absolute',
  },
  containerImage: {
    height: ms(330),
  },
  containerTitle: {
    marginBottom: ms(60),
    marginLeft: ms(12),
  },
  containerGenre: {
    flexDirection: 'row',
    marginLeft: ms(4),
    alignItems: 'center',
  },
  genre: {
    borderColor: 'white',
    height: ms(28),
    width: ms(72),
    borderWidth: ms(1),
    borderRadius: ms(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: ms(20),
    marginRight: ms(10),
  },
  containeEsrb: {
    marginLeft: ms(8),
    marginTop: ms(8),
  },
  containerAbout: {
    marginTop: ms(16),
    marginLeft: ms(8),
  },
});
