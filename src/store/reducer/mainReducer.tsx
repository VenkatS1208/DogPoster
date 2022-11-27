import * as actionTypes from "../actions/actionTypes";

const initialState = {
  dashboardData: {},
  breedImages: [],
  subBreedList: [],
  isLoading: false,
  modalLoading: false,
};

export default function mainReducer(state: object = initialState, action: any) {
  switch (action.type) {
    case actionTypes.FETCH_DASHBOARD_RESPONSE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_DASHBOARD_RESPONSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dashboardData: action.payload,
      };
    case actionTypes.FETCH_DASHBOARD_RESPONSE_FAILED:
      return {
        ...state,
        isLoading: false,
        dashboardData: {},
      };
    case actionTypes.FETCH_BREED_IMAGES_REQUEST:
      return {
        ...state,
        modalLoading: true,
        breedImages: [],
      };
    case actionTypes.FETCH_BREED_IMAGES_SUCCESS:
      return {
        ...state,
        modalLoading: false,
        breedImages: action.payload,
      };
    case actionTypes.FETCH_BREED_IMAGES_FAILED:
      return {
        ...state,
        modalLoading: false,
        breedImages: [],
      };
    case actionTypes.FETCH_SUB_BREED_REQUEST:
      return {
        ...state,
        modalLoading: true,
        subBreedList: [],
      };
    case actionTypes.FETCH_SUB_BREED_SUCCESS:
      return {
        ...state,
        modalLoading: false,
        subBreedList: action.payload,
      };
    case actionTypes.FETCH_SUB_BREED_FAILED:
      return {
        ...state,
        modalLoading: false,
        subBreedList: [],
      };
    default:
      return {
        ...initialState,
      };
  }
}
