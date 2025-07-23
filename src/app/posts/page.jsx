 import React from 'react';
 
const getPosts = async() =>{
      
   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   const data  = await res.json();
  return data
}
 const postPage = async () => {
      const postsData = await getPosts()
       console.log(postsData);
    return (
        <div className='h-screen'>
            <h6>All posts </h6>
            <div className='grid grid-cols-4 gap-6 '>
                {
                postsData?.map(({title, body , id}) =>(
                    <div className='border-2' key={id}>
                        <h6>title:{title} </h6>
                        <h6>Body  :{body} </h6>   
                    </div>
                ))
                }

            </div>
         </div>
    );
 };
 
 export default postPage;