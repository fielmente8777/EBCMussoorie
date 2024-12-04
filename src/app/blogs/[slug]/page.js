import DynamicPage from "../../../components/DynamicPage";
import blogData from "../../../utils/blogData";
import React from "react";


export async function generateStaticParams() {
  const posts = blogData;

  return posts.map((post) => ({
     slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const data = blogData.find((blog) => blog.slug === params.slug);
  return {
    title: data.title,
    description: data.subtitle,
  };
}

const page = ({ params }) => {
  
  const data = blogData.find((blog) => blog.slug === params.slug);

  return (
    <div>
      <DynamicPage data={data} />
    </div>
  );
};

export default page;
