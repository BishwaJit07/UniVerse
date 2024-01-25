import React from 'react';
import CGPACalculator from './Cgpa';
import cgpaPoint from "../../assets/Img/cgpaList.png";
import UseBlogs from "../../hooks/UseBlogs";
import { Link } from 'react-router-dom';
import line from "../../assets/Img/line.png";

const CgpaText = () => {
    const {blogs,refetch} = UseBlogs();
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


<div className="text-center mx-4 lg:mx-0 mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">
         Latest Blogs{" "}
        </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
       
      </div>
<div   className="flex flex-col md:flex-row  justify-center items-center">
      {blogs
  .slice(0, 3)
  .map((blog) => (
 
      <div key={blog._id}  >
      

     
<div className="  border-sky-500 card w-80 md:w-60 h-auto   m-2  bg-white shadow-xl ">
<figure>
    <img className="w-full h-40 lg:h-40" src={blog.img}  alt="No image" />
 
</figure>
<div className="card-body">
  <h2 className="card-title text-black flex justify-center ">
    {blog?.title}
  </h2>
  <div className="border-y-2 "></div>
  <p className="text-black">{blog.details.slice(0, 20)}... <Link to={'/blogs'} className="text-blue-500 text-xs hover:underline ">see more</Link></p>
  <div className="card-actions justify-end">
  <div className="badge badge-secondary">{blog?.name}</div>
  </div>
</div>
</div>
</div>
  
        ))}
    </div>



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
      <div className="my-5">
        <h2 className="text-4xl font-semibold text-center py-4">
          CGPA Calculator
        </h2>
        <p className="lg:text-3xl">
          Calculating CGPA depends on Every Semester GPA. Semester GPA Calculate
          by Grade Points and Credit. It’s very easy to calculate CGPA online
          and here you can find your GPA/CGPA easily. You need your grade or
          grade points and Credit. If you have these credentials you can easily
          calculate your CGPA from this online GPA Calculator.
        </p>

        <p className="lg:text-3xl">
          By using this Online CGPA calculator you will find your semester GPA
          and overall CGPA. If you need to add more subject you can click on Add
          Subject button and if you need to add Semester then you can click on
          Add Next Semester Button.
        </p>
      </div>
        </div>
    );
};

export default CgpaText;