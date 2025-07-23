"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title : "About",
      path : '/about'
    },
    {
      title: "posts",
      path: "/posts",
    },
    {
      title : "Services",
      path : '/services'
    },
    {
      title : "Contacts",
      path : '/contacts'
    },
    {
      title : "Categories",
      path : '/categories'
    },
    {
      title : "Blogs",
      path : '/blogs'
    },
     
  ]

  const handler = () =>{
router.push('/login')
  };
    return (
       <nav className='bg-white flex px-6 py-4 items-center justify-between'>
        <h6>Logo</h6>
        <ul className=' flex justify-between items-center space-x-4  '>
           {
            links?.map((link) => <Link className={`${pathName === link.path && "text-cyan-300"}`} key={link.path} href={link.path}>{link.title}</Link>)
           }
          
        </ul>
        <button onClick={handler} className='bg-white text-cyan-300  p-4'>Login</button>
       </nav>
    );
};

export default Navbar;