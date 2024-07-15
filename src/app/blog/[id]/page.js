import DynamicPage from "@/components/DynamicPage";
import blogData from "@/utils/blogData";
import React from "react";

export async function generateStaticParams() {
  const ids = blogData.map((blog) => blog.id);
  return ids.map((id) => ({
    id: id.toString(), // Convert id to string
  }));
}

const page = ({ params }) => {
  const id = params.id;

  return (
    <div>
      <DynamicPage id={id} />
    </div>
  );
};

export default page;
