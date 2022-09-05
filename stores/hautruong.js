import axios from "axios";
import { API_URL, listDataOther, listNewsNew } from "../app/@function/constant";

export const getListBackstage = async () => {
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
