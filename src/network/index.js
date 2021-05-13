import axios from "axios";
import config from "../../config.json";

const BASE_URL = config.API.BASE_URL;
export const CANCEL_TOKEN_SOURCE = axios.CancelToken.source();

export const getAllPlants = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/plants`, {
      cancelToken: CANCEL_TOKEN_SOURCE.token,
    });

    return response.data;
  } catch (error) {
    console.log(error.reponse);
    return {
      error: error.response,
    };
  }
};

export const getPlant = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/plants/${id}`, {
      cancelToken: CANCEL_TOKEN_SOURCE.token,
    });

    return response.data;
  } catch (error) {
    console.log(error.reponse);
    return {
      error: error.response,
    };
  }
};

export const getAllWaypoints = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/waypoints`, {
      cancelToken: CANCEL_TOKEN_SOURCE.token,
    });

    return response.data;
  } catch (error) {
    console.log(error.response);
    return {
      error: error.response,
    };
  }
};

export const getWaypoint = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/waypoints/${id}`, {
      cancelToken: CANCEL_TOKEN_SOURCE.token,
    });

    return response.data;
  } catch (error) {
    console.log(error.reponse);
    return {
      error: error.response,
    };
  }
};
