import axios from "axios";
import config from "../../config.json";

const BASE_URL = config.API.BASE_URL;
// const BASE_URL =  Platform.OS === 'android' ? 'http://10.0.2.2:8080/api' : 'http://localhost:8080/api';

export const getAllPlants = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/plants`);

    return response.data;
  } catch (error) {
    console.log(error);
    console.log(error.response);
    return {
      error: error.response,
    };
  }
};

export const getPlant = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/plants/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
    console.log(error.response);
    return {
      error: error.response,
    };
  }
};

export const getAllWaypoints = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/waypoints`);

    return response.data;
  } catch (error) {
    console.log(error);
    console.log(error.response);
    return {
      error: error.response,
    };
  }
};

export const getWaypoint = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/waypoints/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
    console.log(error.response);
    return {
      error: error.response,
    };
  }
};

export const getAllTours = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tours`);

    return response.data;
  } catch (error) {
    console.log(error);
    console.log(error.response);
    return {
      error: error.response,
    };
  }
};