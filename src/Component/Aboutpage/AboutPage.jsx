import React from 'react';
import line from "../../assets/Img/line.png"
import aboutimg from "../../assets/Img/aboutimg.png"
import { FcCustomerSupport } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import stu1 from '../../assets/Img/stu1.png'
import stu2 from '../../assets/Img/stu2.png'
import stu3 from '../../assets/Img/stu3.png'
import stu4 from '../../assets/Img/stu4.png'

const AboutPage = () => {
    return (
        <div className="flex-grow max-w-screen-xl mx-4 lg:mx-auto">

                 {/* title  */}
          <div className="text-center mb-12  mt-4">
        <p className="text-[48px] font-alice  dark:text-white">About Us </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        </div>
      <h2></h2>

      <div className='flex flex-col md:flex-row'>
            <img src={aboutimg} alt="" className='rounded'/>
            <p className='m-2 flex justify-center items-center text-center'>UniVerse isn't just a platform, it's a movement. We're a team of passionate students who understand the struggles and triumphs of academic life. We've experienced the late-night calculations, the blog post drafts lost in frustration, and the frantic search for important university updates. That's why we decided to build UniVerse – a one-stop hub designed to ease those burdens and empower students to focus on what truly matters: learning, growing, and thriving..</p>
            </div>


            {/* card 2  */}

                    {/* title  */}
          <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Our Story </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        </div>
      <h2></h2>

      <div className='flex flex-col md:flex-row'>
          
            <p className='m-2 flex justify-center items-center text-center'>Our mission is simple: to equip every student with the tools and resources they need to excel. We believe that technology can be a powerful force for good in education, and UniVerse is our way of proving it. We're constantly innovating, adding new features, and seeking feedback from the very community we serve – because after all, who knows what students need better than students themselves?</p>

            <img src={aboutimg} alt="" className='rounded'/>
            </div>
            

       

{/* team member */}

         {/* title  */}
         <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Our Team </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-7 justify-center  max-w-7xl mx-auto mb-12">

{/* card 1*/}

  <div  className="bg-white shadow rounded my-3 overflow-hidden group relative w-80 h-80 mx-auto">
    <img className="w-full h-60 object-cover group-hover:scale-110  duration-700" src={stu1} alt="" />
    <div className="h-[100px]"></div>
    <div className="absolute bottom-[30px] group-hover:mb-[65px] duration-700 text-center z-10 inset-x-0 ">
      <p className="text-xl  font-bold text-[#5A4F24] group-hover:text-[#ffc107] ">Hifjur Rahman Bayezid
</p>
      <p className="text-sm group-hover:text-white dark:text-black">batch -53 sec B
</p>
    </div>

    <div className=" bg-gradient-to-b from-[#2a262691] to-[#2a2c3c]  rounded-t-[40px] duration-700 absolute group-hover:h-[180px] h-0 group-hover:w-full w-0 group-hover:bottom-0 right-0">
    </div>
  </div>
{/* card 2*/}

  <div  className="bg-white shadow rounded my-3 overflow-hidden group relative w-80 h-80 mx-auto">
    <img className="w-full h-60 object-cover group-hover:scale-110  duration-700" src={stu2} alt="" />
    <div className="h-[100px]"></div>
    <div className="absolute bottom-[30px] group-hover:mb-[65px] duration-700 text-center z-10 inset-x-0 ">
      <p className="text-xl  font-bold text-[#5A4F24] group-hover:text-[#ffc107] ">Redwon Ahmed </p>
      <p className="text-sm group-hover:text-white dark:text-black">batch -53 sec B
</p>
    </div>

    <div className=" bg-gradient-to-b from-[#2a262691] to-[#2a2c3c]  rounded-t-[40px] duration-700 absolute group-hover:h-[180px] h-0 group-hover:w-full w-0 group-hover:bottom-0 right-0">
    </div>
  </div>
{/* card 3*/}

  <div  className="bg-white shadow rounded my-3 overflow-hidden group relative w-80 h-80 mx-auto">
    <img className="w-full h-60 object-cover group-hover:scale-110  duration-700" src={stu3} alt="" />
    <div className="h-[100px]"></div>
    <div className="absolute bottom-[30px] group-hover:mb-[65px] duration-700 text-center z-10 inset-x-0 ">
      <p className="text-xl  font-bold text-[#5A4F24] group-hover:text-[#ffc107] "> Md. Adibur Rahman</p>
      <p className="text-sm group-hover:text-white dark:text-black">Batch -53 sec B
</p>
    </div>

    <div className=" bg-gradient-to-b from-[#2a262691] to-[#2a2c3c]  rounded-t-[40px] duration-700 absolute group-hover:h-[180px] h-0 group-hover:w-full w-0 group-hover:bottom-0 right-0">
    </div>
  </div>

{/* card 4*/}

  <div  className="bg-white shadow rounded my-3 overflow-hidden group relative w-80 h-80 mx-auto">
    <img className="w-full h-60 object-cover group-hover:scale-110  duration-700" src={stu4} alt="" />
    <div className="h-[100px]"></div>
    <div className="absolute bottom-[30px] group-hover:mb-[65px] duration-700 text-center z-10 inset-x-0 ">
      <p className="text-xl  font-bold text-[#5A4F24] group-hover:text-[#ffc107] ">Mirza Lutfur Ali Rafi 
</p>
      <p className="text-sm group-hover:text-white dark:text-black">batch -53 sec B
</p>
    </div>

    <div className=" bg-gradient-to-b from-[#2a262691] to-[#2a2c3c]  rounded-t-[40px] duration-700 absolute group-hover:h-[180px] h-0 group-hover:w-full w-0 group-hover:bottom-0 right-0">
    </div>
  </div>



</div>




        </div>

      
    );
};

export default AboutPage;