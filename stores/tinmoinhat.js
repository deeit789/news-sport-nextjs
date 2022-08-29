import axios from "axios";
import { API_URL, listNewsNew, listDataOther } from "../app/@function/constant";

export const getListNewsNew = async () => {
  try {
    return listNewsNew;
  } catch (error) {
  }
};

export const getListWatchMore = async () => {
  try {
    return listDataOther;
  } catch (error) {
  }
};
