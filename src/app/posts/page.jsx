 import Link from 'next/link';
import React from 'react';
// import { getPosts } from '@/services/postApi';
const getPosts = async() =>{
      
   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   const data  = await res.json();
  return data
}
 const postPage = async () => {
      const postsData = await getPosts()
      
    return (
        <div className='h-screen'>
            <h6>All posts </h6>
            <div className='grid grid-cols-4 gap-6 '>
                {
                postsData?.slice(0,20)?.map(({title, body , id}) =>(
                    <div className='border-2 p-4' key={id}>
                        <h6>title:{title} </h6>
                        <h6>Body  :{body} </h6>  
                        <button className='bg-red-400'> <Link href={`/posts/${id}`}>See Details</Link>
                      </button> 
                    </div>
                ))
                }

            </div>
         </div>
    );
 };
 
 export default postPage;