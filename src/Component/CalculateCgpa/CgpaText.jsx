import React from 'react';
import CGPACalculator from './Cgpa';
import cgpaPoint from "../../assets/Img/cgpaList.png";

import line from "../../assets/Img/line.png";
import LatestBlogsSlider from '../Home/HomeComponent/LatestBlogsSlider/LatestBlogsSlider';
import ExpectedCgpa from './ExpectedCgpa';

const CgpaText = () => {
   
    return (
        <div className="flex-grow max-w-screen-xl mx-4 lg:mx-auto">
             <div className="text-center mx-4 lg:mx-0 mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">
          What is CGPA ?{" "}
        </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        <p className="dark:text-white">
          Say goodbye to the days of tedious calculations and messy
          spreadsheets! UniVerse takes the hassle out of monitoring your
          academic progress with its lightning-fast CGPA calculation tool.
          Simply input your grades and credits, and watch as UniVerse instantly
          delivers your accurate CGPA, saving you precious time and stress.
        </p>
      </div>
     
<CGPACalculator/>

<ExpectedCgpa/>




    <div className="flex flex-col justify-center items-center gap-5 m-4 text-white    ">
        <p className="text-2xl lg:text-5xl">
          Many students have a question that how to use the CGPA Calculator?
          What is the Full Meaning of CGPA?
        </p>

        <p className="lg:text-3xl">
          Here I am going to share how to calculate CGPA and The CGPA Full
          Meaning. Let’s know the NU GPA/CGPA Grading System and how to
          calculate CGPA.
        </p>
        <img src={cgpaPoint} alt="Point Table" className="w-4/6 		  h-4/6" />
      </div>
 
        </div>
    );
};

export default CgpaText;