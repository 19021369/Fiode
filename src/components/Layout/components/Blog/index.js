import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import toSlug from '../toSlug';
import axios from 'axios';
import parse from 'html-react-parser';

function BlogPage() {
    const { blogName } = useParams('');
    const { id } = useParams('');
    const [post, setPost] = useState('');
    useEffect(() => {
      const fetchData1 = async () => {
          var config = {
              method: 'get',
              url: `http://localhost:8080/api/posts?id=${id}`,
              headers: {
                  'Content-Type': 'application/json',
              },
          };

          await axios(config)
              .then(function (response) {
                  setPost(response.data.content);
              })
              .catch(function (error) {
                  console.log(error);
              });
      };
      fetchData1();
  }, [blogName]);

    return (
        <div>
            <img
                src={`http://localhost:8080/fileSystem/${toSlug(blogName)}.jpg`}
                className='w-full'
                alt='anhnen'
            ></img>
            <div className='max-w-[1240px] mx-auto pt-16 px-4 items-center'>
                <h1>{blogName}</h1>
            {post[0]?.body && <div>{parse(post[0]?.body)}</div>}
            </div>
        </div>
    );
}

export default BlogPage;
