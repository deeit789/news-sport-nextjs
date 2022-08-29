import { SearchIcon } from "@icon";
import { Col, Row } from "antd";
import React from "react";
import styles from "../../../styles/Schedule.module.css";
import ScheduleLeft from "./ScheduleLeft";
import ScheduleRight from "./ScheduleRight";

const Schedule = () => {
  return (
    <div className="schedule-style">
      <div className="schedule-style-left">
        <ScheduleLeft />
      </div>
      <div className="schedule-style-right">
       <ScheduleRight />
      </div>
    </div>
  );
};

export default Schedule;
