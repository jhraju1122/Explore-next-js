import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='p-24'>
            This is from blogs page
            {
blogs.map((blog =>(
   <div key={blog.slug} className='border-2 p-12'>
 <h3>{blog.title}</h3>
 <h3>{blog.description}</h3>
 <button className='bg-red-400 p-3'>
    <Link href={`/blogs/${blog.slug}`}>View Details</Link>
 </button>
     </div> 
)))
            }
        </div>
    );
};


const blogs = [
  {
    "slug": "history",
    "title": "Our History",
    "description": "Learn about our origins and the journey that shaped our organization."
  },
  {
    "slug": "mission",
    "title": "Our Mission",
    "description": "Discover our core purpose and what drives our daily efforts."
  },
  {
    "slug": "vision",
    "title": "Our Vision",
    "description": "Explore our long-term aspirations and where we're headed."
  },
  {
    "slug": "team",
    "title": "Meet the Team",
    "description": "Get to know the people behind our work and their roles."
  },
  {
    "slug": "values",
    "title": "Core Values",
    "description": "Understand the guiding principles that define our culture."
  },
  {
    "slug": "impact",
    "title": "Our Impact",
    "description": "See how our work has made a difference in the community."
  },
  {
    "slug": "careers",
    "title": "Careers",
    "description": "Find out how you can join our growing and dynamic team."
  },
  {
    "slug": "partners",
    "title": "Our Partners",
    "description": "Meet the organizations and individuals we collaborate with."
  },
  {
    "slug": "timeline",
    "title": "Company Timeline",
    "description": "A chronological overview of key milestones in our development."
  },
  {
    "slug": "leadership",
    "title": "Leadership",
    "description": "Learn about the people steering our vision and strategy."
  },
  {
    "slug": "awards",
    "title": "Awards & Recognition",
    "description": "See the accolades and honors we've received over the years."
  },
  {
    "slug": "sustainability",
    "title": "Sustainability",
    "description": "Explore our commitment to environmental and social sustainability."
  },
  {
    "slug": "faq",
    "title": "FAQs",
    "description": "Find answers to common questions about who we are and what we do."
  },
  {
    "slug": "newsletter",
    "title": "Newsletter Archive",
    "description": "Browse our past newsletters for updates and insights."
  },
  {
    "slug": "testimonials",
    "title": "Testimonials",
    "description": "Read what our clients and partners say about us."
  },
  {
    "slug": "press",
    "title": "In the Press",
    "description": "See how we've been featured in the media and publications."
  },
  {
    "slug": "donate",
    "title": "Donate",
    "description": "Support our mission with a contribution of your choice."
  },
  {
    "slug": "events",
    "title": "Upcoming Events",
    "description": "Stay updated on our workshops, webinars, and community events."
  },
  {
    "slug": "blog",
    "title": "Our Blog",
    "description": "Read articles and stories written by our team and contributors."
  },
  {
    "slug": "contact",
    "title": "Contact Us",
    "description": "Reach out to us with your inquiries, feedback, or partnership ideas."
  }
]
export default page;