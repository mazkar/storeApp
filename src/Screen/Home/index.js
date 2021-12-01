import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './style';

import {
  getAllProduct,
  getBanner,
  getCategory,
  setPage,
  getAllProductReload,
} from './Reducer/HomeAction';
import {setLoading} from '../../Store/GlobalAction';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {ms} from 'react-native-size-matters';

//component
import ButtonGenre from '../../Component/ButtonGenre';
import LoadingComp from '../../Component/LoadingComp';
import Header from '../../Component/Header';
import Banner from '../../Component/Banner';
import IconCategory from '../../Component/iconCategory';

export default function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getBanner());
    dispatch(getCategory());
  }, [dispatch]);

  const addPage = () => {
    dispatch(setPage());
    dispatch(getAllProductReload());
  };
  const dataProduk = useSelector(state => state.HomeReducer.allProduct);
  const dataCategory = useSelector(state => state.HomeReducer.category);
  const dataBanner = useSelector(state => state.HomeReducer.banner);
  const Loading = useSelector(state => state.HomeReducer.isLoading);
  const loadGlobal = useSelector(state => state.GlobalReducer.loading);

  return (
    <SafeAreaView style={styles.global}>
      <View>
        <Header />

        {dataBanner === 0 || dataBanner === undefined ? (
          <></>
        ) : (
          <>
            <Banner />
          </>
        )}
        {dataCategory === 0 || dataCategory === undefined ? (
          <></>
        ) : (
          <>
            <IconCategory />
            <ButtonGenre />
          </>
        )}
      </View>

      {dataProduk === 0 || dataProduk === undefined ? (
        <></>
      ) : (
        <>
          <View style={{flex: 1, flexWrap: 'wrap', flexDirecton: 'row'}}>
            <FlatList
              style={styles.flatlist}
              data={dataProduk}
              // contentContainerStyle={{
              //   alignItems: 'center',
              //   justifyContent: 'space-between',
              // }}
              numColumns={2}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <ScrollView style={styles.containerContent}>
                    <View>
                      <View>
                        <Image
                          style={styles.imgContent}
                          source={{uri: `${item?.image_uri}`}}
                        />
                      </View>

                      <View style={styles.content}>
                        <View>
                          <Text style={styles.txtTitle}>
                            {item?.product_name}
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              color: 'red',
                              marginLeft: ms(12),
                              marginTop: ms(12),
                              fontSize: ms(16),
                              fontWeight: '600',
                            }}>
                            RP{' '}
                            {item?.normal_price
                              .toFixed(2)
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </TouchableOpacity>
              )}
              ListFooterComponent={
                Loading ? (
                  <ActivityIndicator size={ms(48)} color="red" />
                ) : (
                  <>
                    <View>
                      <TouchableOpacity style={styles.show} onPress={addPage}>
                        <Text
                          style={{
                            fontSize: ms(14),
                            color: 'white',
                            fontWeight: '500',
                          }}>
                          Show More
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )
              }
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
