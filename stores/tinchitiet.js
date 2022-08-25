import axios from "axios";
import { API_URL, listNewsNew, listDataOther } from "../app/@function/constant";
import { ConvertPath } from "../helpers/functions";

export const getDetailNew = async (title) => {
  try {
    console.log(ConvertPath(listDataOther[0].title));
    return listDataOther.filter(
      (item) => ConvertPath(item.title).split("/")[1] == title
    )[0];
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

export const getListNewByTitle = async (limit) => {
  try {
    return listDataOther.map((post) => ({
      params: {
        title: post.title,
      },
    }));
  } catch (error) {
    console.log("error", error);
  }
};
