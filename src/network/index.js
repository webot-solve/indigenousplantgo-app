import axios from "axios";
import config from "../../config.json";

const BASE_URL = config.API.BASE_URL;

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
