import axios from "axios";
import { API_URL, listNewsNew, listDataOther } from "../app/@function/constant";

export const getListTransfer = async () => {
  try {
    return listNewsNew;
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
