import React from 'react';
import { useEffect, useState } from 'react';

//components
import ContentForm from '../../components/ContentForm';

const Upload = () => {
    const [contents, setContent] = useState(null)
  
    useEffect(() => {
      const fetchContent = async () => {
        const response = await fetch('/api/content')
        const json = await response.json()
  
        if(response.ok){
          setContent(json)
        }
      }
  
      fetchContent()
    }, [])
  
    return (
      <div className="upload">
        <div className='contents'>
          {contents && contents.map((contents) => (
            <p key={contents._id}>{contents.name}</p>
          ))}
        </div>
        <ContentForm/>
      </div>
    );
  };
  
  export default Upload;
  