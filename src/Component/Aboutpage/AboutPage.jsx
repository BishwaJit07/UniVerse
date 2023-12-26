import React from 'react';
import line from "../../assets/Img/line.png"
import aboutimg from "../../assets/Img/aboutimg.png"
import { FcCustomerSupport } from 'react-icons/fc';

const AboutPage = () => {
    return (
        <div className='m-4'>

                 {/* title  */}
          <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">About Us </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        </div>
      <h2></h2>

      <div className='flex flex-col md:flex-row'>
            <img src={aboutimg} alt="" className='rounded'/>
            <p className='m-2 flex justify-center items-center text-center'>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p>
            </div>


            {/* card 2  */}

                    {/* title  */}
          <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Our Story </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        </div>
      <h2></h2>

      <div className='flex flex-col md:flex-row'>
          
            <p className='m-2 flex justify-center items-center text-center'>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p>

            <img src={aboutimg} alt="" className='rounded'/>
            </div>
            

            {/* cards  */}

            <div className='m-4 grid grid-cols-1 md:grid-cols-3 gap-4'>

                 <div className='text-center bg-slate-300 rounded py-20 px-4 '>
                  <h2 className='font-bold text-xl  text-red-500  flex justify-center'> <FcCustomerSupport className='text-4xl mx-2'/> Our Customer Platform</h2>
                  <p className=' text-xl  text-sky-500'>The HubSpot customer platform makes it easy for your entire company to work together — from marketing, to sales, to customer service. Each hub is powerful alone, but they're even better together.</p>
                 </div>
                 <div className='text-center bg-slate-300 rounded py-20 px-4 '>
                  <h2 className='font-bold text-xl  text-red-500  flex justify-center'> <FcCustomerSupport className='text-4xl mx-2'/> Our Customer Platform</h2>
                  <p className=' text-xl  text-sky-500'>The HubSpot customer platform makes it easy for your entire company to work together — from marketing, to sales, to customer service. Each hub is powerful alone, but they're even better together.</p>
                 </div>
                 <div className='text-center bg-slate-300 rounded py-20 px-4 '>
                  <h2 className='font-bold text-xl  text-red-500  flex justify-center'> <FcCustomerSupport className='text-4xl mx-2'/> Our Customer Platform</h2>
                  <p className=' text-xl  text-sky-500'>The HubSpot customer platform makes it easy for your entire company to work together — from marketing, to sales, to customer service. Each hub is powerful alone, but they're even better together.</p>
                 </div>
                 <div className='text-center bg-slate-300 rounded py-20 px-4 '>
                  <h2 className='font-bold text-xl  text-red-500  flex justify-center'> <FcCustomerSupport className='text-4xl mx-2'/> Our Customer Platform</h2>
                  <p className=' text-xl  text-sky-500'>The HubSpot customer platform makes it easy for your entire company to work together — from marketing, to sales, to customer service. Each hub is powerful alone, but they're even better together.</p>
                 </div>
                 <div className='text-center bg-slate-300 rounded py-20 px-4 '>
                  <h2 className='font-bold text-xl  text-red-500  flex justify-center'> <FcCustomerSupport className='text-4xl mx-2'/> Our Customer Platform</h2>
                  <p className=' text-xl  text-sky-500'>The HubSpot customer platform makes it easy for your entire company to work together — from marketing, to sales, to customer service. Each hub is powerful alone, but they're even better together.</p>
                 </div>
                 <div className='text-center bg-slate-300 rounded py-20 px-4 '>
                  <h2 className='font-bold text-xl  text-red-500  flex justify-center'> <FcCustomerSupport className='text-4xl mx-2'/> Our Customer Platform</h2>
                  <p className=' text-xl  text-sky-500'>The HubSpot customer platform makes it easy for your entire company to work together — from marketing, to sales, to customer service. Each hub is powerful alone, but they're even better together.</p>
                 </div>
               


            </div>
        </div>

      
    );
};

export default AboutPage;