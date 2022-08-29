import axios from "axios";
import { API_URL, listVideos, listDataOther } from "../app/@function/constant";

export const getListVideo = async () => {
  try {
    return listVideos;
  } catch (error) {
  }
};

export const getListWatchMore = async () => {
  try {
    return listDataOther;
  } catch (error) {
  }
};
