import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Component/Home/Home';
import Login from '../Component/SignUp/Login';
import SignIn from '../Component/SignUp/SignIn';
import Blogs from '../Component/Home/Blogs/Blogs';
import Cgpa from '../Component/CalculateCgpa/Cgpa';
import AddBlogs from '../Component/Home/Blogs/AddBlogs';
import PrivateRoute from './PrivateRoute';
import Verify from '../Component/Verifypage/Verify';
import DashBoard from '../Component/DashBoard/DashBoard';

import AddNotice from '../Component/DashBoard/Notice/AddNotice';
import AllNoticeCard from '../Component/Home/HomeComponent/Notice/AllNoticeCard';
import AdminProfile from '../Component/DashBoard/Profile/AdminProfile';
import MyBlogs from '../Component/Home/Blogs/MyBlogs';
import MyNotice from '../Component/DashBoard/Notice/MyNotice';
import AllUsers from '../Component/DashBoard/AllUsers/AllUsers';
import AboutPage from '../Component/Aboutpage/AboutPage';
import ForgetPass from '../Component/SignUp/ForgetPass';
import ManageBlogs from '../Component/DashBoard/ManageBlogs/ManageBlogs';

const router = createBrowserRouter([

    {
        path:"/",
        element: 
            <Main/>
            ,
       
        children:[
           
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"signin",
                element:<SignIn/>
            },
            {
                path:"blogs",
                element:<Blogs/>
            },
            {
                path:"Cgpa",
                element:<Cgpa/>
            },
            {
                path:"verify",
                element:<Verify/>
            },
            {
                path:"dashboard",
                element:<DashBoard/>
            },
            
            {
                path:"allnotice",
                element:<AllNoticeCard/>
            },
            {
                   path:"/addblog",
                   element: <PrivateRoute>
                           <AddBlogs/>
                   </PrivateRoute> 
            },
            {
                   path:"/myblogs",
                   element: <PrivateRoute>
                    <MyBlogs/>
                   </PrivateRoute>
                           
                 
            },
            
            {
                   path:"/about",
                   element: 
                           <AboutPage/>
                 
            },
            {
                   path:"/forgetpass",
                   element: 
                           <ForgetPass/>
                 
            },
            {
                path:"/profile",
                element: 
                        <AdminProfile/>
                
            },
           
        ]
    },

    {
        path:'dashboard',
        element: <PrivateRoute>
          <DashBoard/>
        </PrivateRoute>,

        children:[
            {
                path:"addnotice",
                element: 
                        <AddNotice/>
                
            },
            {
                path:"profile",
                element: 
                        <AdminProfile/>
                
            },
            {
                path:"mynotice",
                element: 
                        <MyNotice/>
                
            }
            ,
            {
                path:"alluser",
                element: 
                        <AllUsers/>
                
            }
            ,
            {
                path:"manageblogs",
                element: 
                        <ManageBlogs/>
                
            }

        ]
      }
]);

export default router;