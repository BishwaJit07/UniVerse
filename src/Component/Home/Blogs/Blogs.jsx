import { useEffect, useState } from "react";

import { Link } from 'react-router-dom';
import line from "../../../assets/Img/line.png"
import { CiCirclePlus } from "react-icons/ci";
import { LiaBlogSolid } from "react-icons/lia";

const Blogs = () => {

  const [blogData, setBlogData] = useState([]);
  console.log(blogData);
  const [loading, setLoading] = useState(true);



  // fetch Blog data
  useEffect(() => {
 

    fetch("https://univer-city-server-nupttm57t-bishwajitr69-gmailcom.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBlogData(data);
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
        setLoading(false);
        // Handle the error or set blogData to a default value (e.g., [])
        setBlogData([]);
      });
  }, []);

    return (
      <div >
    
        <div className='lg:m-5  flex flex-col justify-center items-center'>
         {/* title  */}
         <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Our Latest Blogs </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
      
      </div>
          <div className="flex justify-between">
          <Link to='/addblog' className=' m-4  btn glass bg-red-600'> <CiCirclePlus className="text-white text-2xl"/> Add Your Blog</Link>
          <Link to='/myblogs'  className=' m-4  btn glass bg-red-600'><LiaBlogSolid className="text-white text-2xl"/> Your Blog</Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
          {blogData.map((blog) => (


<div key={blog._id} className=" c border-sky-500 card w-96 bg-white shadow-xl ">
<figure>
    <img className="w-full h-60 lg:h-80" src={blog.img}  alt="No image" />
 
</figure>
<div className="card-body">
  <h2 className="card-title text-black flex justify-center ">
    {blog?.title}
  </h2>
  <div className="border-y-2 "></div>
  <p className="text-black">{blog.details}</p>
  <div className="card-actions justify-end">
  <div className="badge badge-secondary">{blog?.name}</div>
  </div>
</div>
</div>
          ))}
         
      </div>
  
        </div>
      </div>
       
    );
};

export default Blogs;