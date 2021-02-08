import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchStudios = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://zigomaticus.github.io/permstudios/db111.json?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy.type}&_order=${sortBy.order}`
    )
    .then(({ data }) => {
      dispatch(setStudios(data));
    });
};

export const setStudios = (studios) => ({
  type: "SET_STUDIOS",
  payload: studios,
});


// https://yadi.sk/d/tqlVmgzVaYDr9A
// http://localhost:3003/studios