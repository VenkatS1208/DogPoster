import * as actionTypes from "./actionTypes";

const fetchDashboardResponse = () => ({
  type: actionTypes.FETCH_DASHBOARD_RESPONSE_REQUEST,
});

const fetchSubBreed = (req) => ({
  type: actionTypes.FETCH_SUB_BREED_REQUEST,
  payload: req,
});

const fetchBreedImages = (req) => ({
  type: actionTypes.FETCH_BREED_IMAGES_REQUEST,
  payload: req,
});

const actions = {
  fetchDashboardResponse,
  fetchBreedImages,
  fetchSubBreed,
};
export default actions;
