import { collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../Firebase';
import Navbar from './Navbar';


const SingleBlog = () => {
  const {id} = useParams()

  const [data, setData] = useState({})

  const colRef = collection(db, 'blog');

  useEffect(() => {
  const singledata = doc(db,'blog',id);
    const singlefetch = ()=>{

    getDoc(singledata).then((doc)=>setData(doc.data()));
    
  }

  singlefetch()
},[id])

  return (
    <>
    
    <Navbar/>
    <div className="container d-flex justify-content-center align-items-center my-3">
      <div className='left-img'>
      <img src={data.imgUrl} alt="firebase" className='img-fluid' style={{width: "70%"}}/>
      </div>
      <div className="right-data d-flex justify-content-center align-items-center flex-column">

      <div className="user-content d-flex justify-content-center align-items-center">
    <img src={data.authorImg} alt=""
    style={{width: '10%', borderRadius: '50%', margin: '0.5rem'}}
    />
      <h4>{data.authorName}</h4>
    </div>


    <div className='text-center'>
    <h4>{data.title}</h4>
    <h6>{data.shortDesc}</h6>
    <h4>{data.fullDesc}</h4>
    </div>

      </div>
    </div>



    </>
  )
}

export default SingleBlog
