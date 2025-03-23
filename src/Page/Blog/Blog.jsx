import React from 'react'
import "./Blog.css"
import MainTitle from '../../components/Atoms/MainTitle/MainTitle'
import BlogCards from '../../components/Atoms/BlogCards/BlogCards'

const Blog = () => {
  return (
    <div className='container BlogMainContainer'>
        <MainTitle content={"Blog"} para={"Welcome to my blog, where I share insights, projects, and discoveries. From personal experiences to industry trends, explore my journey in tech and beyond."}/>
        <div className='BlogCards'>
            <BlogCards/>
            <BlogCards/>
            <BlogCards/>
            <BlogCards/>
        </div>
    </div>
  )
}

export default Blog