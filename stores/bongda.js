import axios from "axios";
import {
  API_URL,
  listFootball,
  listDataOther,
} from "../app/@function/constant";

export const getListFootball = async () => {
  try {
    return listFootball;
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
