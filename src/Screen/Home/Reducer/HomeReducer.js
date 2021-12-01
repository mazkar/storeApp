const initialState = {
  allProduct: [],
  productDetail: {},
  productByCategory: [],
  id: '',
  banner: [],
  category: [],
  categoryName: '',
  page: 1,
  isLoading: false,
  isError: false,
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCT':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_ALL_PRODUCT':
      return {
        ...state,
        allProduct: action.payload,
        isLoading: false,
      };

    case 'SET_ALL_PRODUCT_RELOAD':
      return {
        ...state,
        allProduct: [...state.allProduct, ...action.payload],
        isLoading: false,
      };
    case 'GET_CATEGORY':
      return {
        ...state,

        isLoading: true,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
        isLoading: false,
      };
    case 'GET_BANNER':
      return {
        ...state,

        isLoading: true,
      };
    case 'SET_BANNER':
      return {
        ...state,
        banner: action.payload,
        isLoading: false,
      };
    case 'SET_ID':
      return {
        ...state,
        id: action.payload,
      };
    case 'SET_PAGE':
      return {
        ...state,
        page: state.page + 1,
      };
    case 'GET_PRODUCT_DETAIL':
      return {
        ...state,

        isLoading: true,
      };
    case 'SET_PRODUCT_DETAIL':
      return {
        ...state,
        productDetail: action.payload,
        isLoading: false,
      };
    case 'GET_PRODUCT_BY_CATEGORY':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_PRODUCT_BY_CATEGORY':
      return {
        ...state,
        productByCategory: action.payload,
        isLoading: false,
      };
    case 'SET_CATEGORY_NAME':
      return {
        ...state,
        categoryName: action.payload,
      };

    default:
      return state;
  }
};
