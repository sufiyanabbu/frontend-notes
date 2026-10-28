import React from "react";
import { Link, useParams } from "react-router-dom";

const CourseDetails = () => {

    const param = useParams();
    console.log(param.courseId)

  return (
    <div>
      <h1 className="text-4xl font-bold"> {param.courseId} details are here...</h1>
    </div>
  );
};

export default CourseDetails;
