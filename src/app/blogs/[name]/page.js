import DynamicBlogpage from "./DynamicBlogpage.jsx";



export default function page({params}) {
  console.log(params)
  return <DynamicBlogpage params={params}/>;
  // return(
  //   <h1 className="">hello</h1>
  // )
}

