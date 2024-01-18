import { useQuery } from "@tanstack/react-query";
import React from "react";

const UseBlogs = () => {
    
    const { data: blogs = [], refetch } = useQuery({ queryKey: ["blogs"], queryFn: async () => {
        const res = await fetch("https://book-your-college-server-copy.vercel.app/blogs");
        return res.json();
      }});
  return { blogs, refetch };
};

export default UseBlogs;

