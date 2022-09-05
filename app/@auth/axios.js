import { SERVICE_URL } from "@function/wsCode";
import axios from "axios";

export const RequestApiPrivate = axios.create({
    baseURL: SERVICE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });