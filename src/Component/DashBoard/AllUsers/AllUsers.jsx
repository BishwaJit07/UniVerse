
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import line from '../../../assets/Img/line.png'
const AllUsers = () => {
    const [userData, serUserData] = useState([]);
    console.log(userData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://univer-city-server-nupttm57t-bishwajitr69-gmailcom.vercel.app/users")
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            serUserData(data);
          })
          .catch((error) => {
            console.error('Error fetching blog data:', error);
            setLoading(false);
            // Handle the error or set userData to a default value (e.g., [])
            serUserData([]);
          });
      }, []);
     

      const handleAdmin = (user) => {
        fetch(`https://univer-city-server-nupttm57t-bishwajitr69-gmailcom.vercel.app/users/admin/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
                location.reload();
    
              Swal.fire({
                title: "Sweet!",
                text: `${user.name} is Now Admin`,
                imageUrl:
                  "https://png.pngtree.com/png-vector/20190301/ourmid/pngtree-vector-administration-icon-png-image_747092.jpg",
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "Custom image",
              });
            }
          });
      };

    
      
    return (
        <div>
            {/* title  */}
        <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">All User </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th className='hidden md:inline'></th>
        <th className='hidden md:inline'>Name</th>
        <th>Job</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
    
    {userData.map((user,index) => (
            <tr key={user._id}>
            <th className='hidden md:inline'>{index+1}</th>
            <td className='hidden md:inline'>{user?.name}</td>
            <td>{user?.email}</td>
            <td>
                    {user.role === "admin" ? (
                      <p className="text-black bg-gray-100 btn" disabled>
                       {user.role}
                      </p>
                    ) : (
                     
                        <p  onClick={() => handleAdmin(user)} className="text-black bg-gray-100 btn " >Make Admin</p>
                      
                    )}
                  </td>
                  <td>
                
                  </td>
          </tr>
        ))}
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;