import { stepMatch } from "@function/constant";
import { ConvertPath } from "helpers/functions";
import { useRouter } from "next/router";
import React from "react";
import Left from "./Left";
import Right from "./Right";

const DetailSchedule = () => {
  const router = useRouter()
  return (
    <div className="schedule-style">
    <div className="schedule-style-left">
      <Left />
    </div>
    <div className="schedule-style-right">
     <Right />
    </div>
  </div>
  );
};

export default DetailSchedule;
