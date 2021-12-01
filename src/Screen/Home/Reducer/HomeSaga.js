import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {put, takeLatest, select} from 'redux-saga/effects';
import {navigate} from './../../../Utils/Navigation';

//action
import {
  setAllProduct,
  setBanner,
  setCategory,
  setAllProductReload,
} from './HomeAction';
import {setLoading} from './../../../Store/GlobalAction';

function* sagaGetBanner(action) {
  try {
    yield put(setLoading(true));
    const res = yield axios.get(
      `https://gardien.tokodistributor.co.id/api-web/v2/utility/home/banner-web`,
    );
    console.log(res, 'result get banner');
    yield put(setBanner(res.data.data));
  } catch (error) {
    console.log(error, 'error get banner');
  } finally {
    yield put(setLoading(false));
  }
}

function* sagaGetAllProduct(action) {
  try {
    yield put(setLoading(true));
    const res = yield axios.get(
      `https://gardien.tokodistributor.co.id/api-web/v2/product-recommendation`,
      {
        params: {
          page: 1,
        },
      },
    );
    console.log(res, 'result get all Product');
    yield put(setAllProduct(res.data.data));
  } catch (error) {
    console.log(error, 'error get Product');
  } finally {
    yield put(setLoading(false));
  }
}
function* sagaGetAllProductReload(action) {
  const Page = yield select(state => state.HomeReducer.page);
  try {
    yield put(setLoading(true));
    const res = yield axios.get(
      `https://gardien.tokodistributor.co.id/api-web/v2/product-recommendation`,
      {
        params: {
          page: Page,
        },
      },
    );
    console.log(res, 'result get all Product');
    yield put(setAllProductReload(res.data.data));
  } catch (error) {
    console.log(error, 'error get Product');
  } finally {
    yield put(setLoading(false));
  }
}

function* sagaGetCategory(action) {
  try {
    yield put(setLoading(true));

    const res = yield axios.get(
      `https://gardien.tokodistributor.co.id/api-web/v2/utility/home/box-category`,
      {
        params: {
          with_staple: true,
        },
      },
    );
    console.log(res, 'result get category');
    yield put(setCategory(res.data.data));
  } catch (error) {
    console.log(error, 'error get category');
  } finally {
    yield put(setLoading(false));
  }
}

export function* SagaHomeWorker() {
  yield takeLatest('GET_BANNER', sagaGetBanner);
  yield takeLatest('GET_ALL_PRODUCT', sagaGetAllProduct);
  yield takeLatest('GET_CATEGORY', sagaGetCategory);
  yield takeLatest('GET_ALL_PRODUCT_RELOAD', sagaGetAllProductReload);
}
