import React from 'react'
import { useParams } from 'react-router-dom';
function BlogPage() {
    const { blogName } = useParams('');

  return (
    <div className="max-w-[1240px] mx-auto pt-16 px-4 items-center">{blogName}</div>
  )
}

export default BlogPage