import axios from "axios";
import { API_URL, dataPredic, listDataOther } from "../app/@function/constant";

export const getListPredic = async () => {
  try {
    return dataPredic;
  } catch (error) {
    console.log("error", error);
  }
};

export const getListWatchMore = async () => {
  try {
    return listDataOther;
  } catch (error) {
    console.log("error", error);
  }
};
