let initialState = {
  studios: [],
  pages: [],
  isLoaded: false,
};

const studios = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STUDIOS":
      return {
        ...state,
        studios: action.payload,
        totalCount: action.payload.totalCount,
        isLoaded: true,
      };
    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default studios;
