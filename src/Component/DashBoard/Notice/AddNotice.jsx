import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import line from "../../../assets/Img/line.png"
const AddNotice = () => {
    const { user } = useContext(AuthContext);
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = (noticeData) => {
        
        
        console.log(noticeData,user)

            const finalData = {
              title: noticeData.title,
              details: noticeData.details,
               img:noticeData.img,
              
              name:user.displayName,
              email: user.email,
              
            };
            
            console.log({  finalData });
        
            fetch('https://univer-city-server-nupttm57t-bishwajitr69-gmailcom.vercel.app/notice', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(finalData),
              })
                .then((response) => {
                  return response.json();
                })
                .then((data) => {
                  console.log(data);
            
                  if (data.acknowledged) {
                    Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: 'Notice Published',
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigate('/allnotice');
                  } else {
                    Swal.fire({
                      position: 'center',
                      icon: 'error',
                      title: 'Failed to add a Notice',
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                })
                .catch((error) => console.error(error));
            };
            
    return (
        <div>
              {/* title  */}
        <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Add Notice </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        </div>

        {/* from */}
              <div className='  '>
      
      <form onSubmit={handleSubmit(onSubmit)} className='px-8 pt-6  pb-8 m-4 bg-white dark:bg-gray-800 rounded md:w-[560px]' action="">

        {/* input field */}
        <div className='m-4 md:mr-2 md:mb-0'>
          <label htmlFor="blog_title" className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Notice Tittle</label>
          <input {...register('title', {required: true})} type="text" id="blog_title" className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"placeholder="Type Notice title" />
        </div>

  {/* input field */}
  <div className='m-4 md:mr-2 md:mb-0'>
          <label htmlFor="img" className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Image Link</label>
          <input {...register('img', {required: true})} type="text" id="img" className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"placeholder="post img in imgbb anf hare link here" />
        </div>

        {/* input field */}
        <div className='m-4 md:mr-2 md:mb-0'>
          <label htmlFor="description" className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Description</label>
          <textarea {...register('details', {required: true})} id="description" rows="4" className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Write the notice here..."></textarea>
        </div>
        <button className='text-[20px] font-bold w-[50%] mx-auto bg-blue-500 rounded-full text-white py-[13px]  flex justify-center items-center '>Done</button>
        </form>
</div>
        </div>
    );
};

export default AddNotice;