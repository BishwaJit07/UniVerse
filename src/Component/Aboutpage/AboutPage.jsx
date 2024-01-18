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
            

            {/* cards  */}

            <div className='m-4 grid grid-cols-1 md:grid-cols-3 gap-4'>

                 <div className='text-center bg-slate-300 rounded py-20 px-4 '>
                  <h2 className='font-bold text-xl  text-red-500  flex justify-center'> <FcCustomerSupport className='text-4xl mx-2'/> Our Customer Platform</h2>
                  <p className=' text-xl  text-sky-500'>But UniVerse is more than just functionality. We're also about fostering a strong and supportive community. We believe that connection is key to academic success, and our platform provides a space for students to share their experiences, offer advice, and celebrate each other's achievements. Whether you're struggling with a difficult concept or simply looking for a friendly chat, you'll always find a welcoming ear in the UniVerse community</p>
                 </div>
                 <div className='text-center bg-slate-300 rounded py-20 px-4 '>
                  <h2 className='font-bold text-xl  text-red-500  flex justify-center'> <FcCustomerSupport className='text-4xl mx-2'/> Our Customer Platform</h2>
                  <p className=' text-xl  text-sky-500'>Join us on this journey! Whether you're a seasoned student leader or a nervous freshman, UniVerse welcomes you with open arms. Together, we can create a brighter future for academic life, where stress is replaced by support, and every student has the chance to reach their full potential.</p>
                 </div>
                 <div className='text-center bg-slate-300 rounded py-20 px-4 '>
                  <h2 className='font-bold text-xl  text-red-500  flex justify-center'> <FcCustomerSupport className='text-4xl mx-2'/> Our Customer Platform</h2>
                  <p className=' text-xl  text-sky-500'>So, what are you waiting for? Explore UniVerse, share your voice, and become part of something bigger than yourself.</p>
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