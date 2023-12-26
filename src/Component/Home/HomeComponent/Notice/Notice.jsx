
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { BsArrowBarLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Notice = () => {
    const [noticeData, setNoticeData] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(noticeData);
    // fetch Notice data
  useEffect(() => {
 

    fetch("https://univer-city-server-nupttm57t-bishwajitr69-gmailcom.vercel.app/notice")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setNoticeData(data);
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
        setLoading(false);
        // Handle the error or set noticeData to a default value (e.g., [])
        setNoticeData([]);
      });
  }, []);
    return (
        <div className="my-4 bg-red-200 flex text-black">
          <p className="bg-red-500 text-lg text-white p-2 rounded">  Notice:</p>
          
              <Marquee >{noticeData.map((notice) => ( 
   <Link to='/allnotice' key={notice._id} className="mx-4 flex items-center "> <BsArrowBarLeft /><span className="mx-2">{notice?.title}</span></Link>
   ))}
  
  </Marquee>
 
        </div>
    );
};

export default Notice;