export const initialState = {
  user: null,
  item: null,
  //remove token later
  token:
    "BQC1_WCbx8sWyu-aMvUbdzxsJfHJwpBC__gD3XRnWqeBspOBn_QO4iAXZPuiA51BnpZ9bvBFUB-qBwHUB6EOxcpvKm0017lIIfzCAt3n74lq1vlGXxc5OkEWcAM_2nK6OE4sDyQ9gLfBKatWdIPsvVQGEVfVBk1nQ-I3cgbOwnkSF3yH",
  playing: false,
  playlists: [],
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
