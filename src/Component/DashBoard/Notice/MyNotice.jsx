
import { useContext, useEffect, useState } from "react";
import { AiOutlineDelete,} from 'react-icons/ai'

import line from "../../../assets/Img/line.png"

import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";

const MyNotice = () => {
    const [noticeData, setNoticeData] = useState([]);
    console.log(noticeData);
    const [loading, setLoading] = useState(true);
  
    const {user} = useContext(AuthContext);
  
  console.log(user?.email);
  
    // fetch notice data
    useEffect(() => {
   
  
      fetch("https://univer-city-server-nupttm57t-bishwajitr69-gmailcom.vercel.app/notice")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setNoticeData(data);
        })
        .catch((error) => {
          console.error('Error fetching notice data:', error);
          setLoading(false);
          // Handle the error or set noticeData to a default value (e.g., [])
          setNoticeData([]);
        });
    }, []);
  
    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://univer-city-server-nupttm57t-bishwajitr69-gmailcom.vercel.app/notice/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: `notice Deleted`,
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
                location.reload();
              }
            })
            .catch((error) => console.log(error));
        }
      });
    };
    return (
        <div>
  <div className='lg:m-5 flex flex-col justify-center items-center'>
           {/* title  */}
        <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Latest Notice </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
      
      </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {noticeData.map((notice) => {
 if (notice?.email === user?.email) {
    console.log(notice);
    return (
          <div  key={notice._id} className="card w-96 bg-blue-800 text-white glass">
           
  <div className="card-body items-center text-center">
  <figure><img src={notice?.img} className="w-full h-60 lg:h-80" alt="img" /></figure>
    <h2 className="card-title">{notice.title}</h2>
    <div className="divider "></div>
    <p>{notice.details}</p>
    <button
                      onClick={() => handleDelete(notice._id)}
                      className="bg-red-500 px-[12px] py-[10px] rounded-full tooltip"
                      data-tip="Delete Blog"
                    >
                      <AiOutlineDelete className="text-white text-2xl  rounded-full " />
                    </button>
  </div>
            
</div>
      );
}

})}
            

        
          </div>
      </div>
        </div>
    );
};

export default MyNotice;