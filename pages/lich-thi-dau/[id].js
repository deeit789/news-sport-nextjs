import React from "react";
import DetailSchedule from '../../app/project/lich-thi-dau/chi-tiet/DetailSchedule'


const Schedule = (props) => {
  return (
    <div className="body">
    <DetailSchedule />
    </div>
  )

};


export const getStaticProps = async ({ params }) => {
  return {
    props: {
      params
      },
  };
};
export const getStaticPaths = () => {
  return {
  paths: [],
  fallback: true,
  };
}

export default Schedule;
