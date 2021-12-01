import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Input, Button} from 'react-native-elements';

import {
  setCategoryName,
  getCategory,
  getAllProduct,
  getProductByCategory,
  setId,
} from './../Screen/Home/Reducer/HomeAction';
import {setLoading} from '../Store/GlobalAction';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {ms} from 'react-native-size-matters';
import LoadingComp from './LoadingComp';

export default function IconCategory(props) {
  const [activeGenre, setActiveGenre] = useState(0);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getId = item => {
    dispatch(setId(item.id));
    navigation.navigate('Detail');
  };

  const CategoryName = e => {
    dispatch(setCategoryName(e.category_name));
    console.log(e, 'e');
  };

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getAllProduct());

    dispatch(setLoading(false));
  }, [dispatch]);
  const Category = useSelector(state => state.HomeReducer.category);

  return (
    <View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Category === 0 || Category === undefined ? (
            <></>
          ) : (
            Category?.map((e, i) => {
              return (
                <>
                  <View style={styles.containerGenre}>
                    <TouchableOpacity
                      onPress={() => {
                        setActiveGenre(i);
                        CategoryName(e);
                      }}
                      style={{marginLeft: ms(8)}}
                      key={i}>
                      <Image
                        style={{height: ms(24), width: ms(24)}}
                        source={{uri: `${e.icon}`}}
                      />
                      <Text style={styles.txtGenre}>
                        {e.category_name.substring(0, 10)}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              );
            })
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGenre: {
    flex: 1,
    marginTop: ms(32),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genre: {
    borderColor: 'white',
    borderWidth: ms(1),
    width: ms(104),
    borderRadius: ms(6),
    height: ms(32),
    marginLeft: ms(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtGenre: {
    fontWeight: '500',

    //     whiteSpace: nowrap;
    //     overflow: hidden;
    //     textOverflow: ellipsis;
    //     maxwidth: 200px;
  },
  ContainerTitle: {
    marginLeft: ms(12),
    marginTop: ms(24),
  },
  FlatList: {
    marginLeft: ms(12),
    marginTop: ms(24),
  },
  containerContent: {
    backgroundColor: '#202020',
    height: ms(144),
    width: ms(220),
    alignSelf: 'center',
    borderBottomRightRadius: ms(10),
    borderBottomLeftRadius: ms(10),
  },
  containerRating: {
    backgroundColor: '#202020',
    borderColor: '#f3ad2e',
    borderWidth: ms(2),
    marginLeft: ms(10),
    borderRadius: ms(6),
    height: ms(32),
    width: ms(42),
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: ms(12),
  },
});
