import React from "react";

const ScheduleRight = () => {
  return (
    <>
      {" "}
      <div className="schedule-style-right-accept">TRẬN ĐẤU QUAN TÂM</div>
      <div className="schedule-style-right-accept schedule-style-right-accept-ml">
        GIẢI ĐẤU CỦA TÔI{" "}
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke-linecap="square"
            stroke-linejoin="round"
            stroke-width="32"
            d="M256 112v288m144-144H112"
          ></path>
        </svg>
      </div>
      <div className="schedule-style-right-list"></div>
    </>
  );
};

export default ScheduleRight;
