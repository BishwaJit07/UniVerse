import stu1 from "../../../../assets/Img/avatar.png";
import stu2 from "../../../../assets/Img/avatar3.png";
import stu3 from "../../../../assets/Img/avatar2.png";


const StudentComment = () => {
    return (
      <div className="flex flex-col-reverse   md:flex-row  justify-evenly items-center   my-40">
        {/* student comment */}
        <div className="lg:ps-10 sm:mt-10">
          {/* comment 1  */}
          <div className="flex items-center p-6 drop-shadow-md shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] mb-12 rounded-2xl  bg-base-100  ">
            <img src={stu1} alt="" className="w-20 h-20" />
            <div className="ps-10">
              <h3 className=" text-xl	 font-medium	">Jenny Wilson</h3>
              <p>Lorem ipsum dolor sit amet, <br />  consectetur adipisicing elit.</p>
            </div>
          </div>
  
          {/* comment 1  */}
          <div className="flex items-center p-6 drop-shadow-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-12 mx-2 rounded-2xl   bg-base-100">
            <img src={stu2} alt="" className="w-20 h-20" />
            <div className="ps-10">
              <h3 className=" text-xl font-medium	">Jenny Wilson</h3>
              <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.</p>
            </div>
          </div>
  
          {/* comment 1  */}
          <div className="flex items-center p-6 drop-shadow-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-12 rounded-2xl   bg-base-100">
            <img src={stu3} alt="" className="w-20 h-20" />
            <div className="ps-10">
              <h3 className=" text-xl	 font-medium	">Jenny Wilson</h3>
              <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
  
        {/* Tropical Adventure */}
        <div>
          <h2 className=" text-4xl">
            <span className="font-bold">UniVerse: Empowering Students </span> <br />
            for Students.
          </h2>
           <p className=" font-medium py-5">Student Tropical Vacation: Relax and Recharge</p>
           <ul className=" list-disc mb-14">
              <li>Lorem ipsum dolor sit amet, <br /></li>
              <li>Massa quis natoque sit quam</li>
              <li>Eros non pellentesque elit </li>
              <li>tortor id euismod habitant</li>
              <li>tortor id euismod habitant</li>
           </ul>
           <button className="btn bg-orange-500 font-light text-white text-base rounded-full  px-10">Explore More</button>
        </div>
      </div>
    );
  };
  
  export default StudentComment;