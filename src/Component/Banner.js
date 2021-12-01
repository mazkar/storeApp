import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {ms} from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';
import {useSelector, useDispatch} from 'react-redux';
import {
  getBanner,
  getAllProduct,
  getCategory,
} from '../Screen/Home/Reducer/HomeAction';

export default function Banner() {
  const isCarousel = React.useRef(null);
  const SLIDER_WIDTH = Dimensions.get('window').width + 80;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1.0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getBanner());
    dispatch(getCategory());
  }, [dispatch]);
  const banner = useSelector(state => state.HomeReducer.banner);
  return (
    <View>
      <Image />
      <Carousel
        layout="tinder"
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        autoplay={true}
        autoplayDelay={1000}
        autoplayInterval={1000}
        layoutCardOffset={1}
        ref={isCarousel}
        data={banner}
        renderItem={({item, index}) => (
          <View style={styles.container} key={index}>
            <Image source={{uri: item.url_mobile}} style={styles.image} />
          </View>
        )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 1,

    marginTop: ms(15),

    justifyContent: 'center',
    marginLeft: 4,
  },
  image: {
    height: 150,
    width: ms(360),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
