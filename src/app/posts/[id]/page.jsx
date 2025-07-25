import React from 'react';

const getDetailsPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostDetailsPage = async ({ params }) => {
  const { title, body } = await getDetailsPost(params.id);

  return (
    <div className='p-4'>
      <h6 className='text-lg font-bold'>Title: {title}</h6>
      <p className='text-gray-700'>Description: {body}</p>
    </div>
  );
};

export default PostDetailsPage;

