const initialState = {
  loading: false,
  language: 'en',
  theme: 'dark',
};

export function GlobalReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
}
