import React, { useEffect, useState  } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";
import * as fs from 'fs';

const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }

  const [blog, setBlogs] = useState(props.myBlogs);
//   useEffect(() => {
    
//   }, [router.isReady]);
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1  className={styles.title}>{blog && blog.title}</h1>
        <hr />
        {blog &&<div dangerouslySetInnerHTML={createMarkup(blog.content)}></div> }
       
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return{
    paths:[
      { params: {slug: 'how-to-learn-nextjs'} },
      { params: {slug: 'how-to-learn-javascript'} },
      { params: {slug: 'how-to-learn-reactjs'} },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context){
  const { slug } =context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,`utf-8`)
    // fs.readFile(`blogdata/how-to-learn-nextjs.json`,`utf-8`, (err,data)=>{


      
    
  return{
    props:{ myBlogs: JSON.parse(myBlog) },
  }
}


export default Slug;
