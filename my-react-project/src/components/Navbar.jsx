import { getAuth } from 'firebase/auth';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
const navigate = useNavigate()
const location = useLocation();
const auth = getAuth();

console.log(location.pathname)

const logOut = () =>{
  auth.signOut();
  navigate('/')
}

// console.log(useLocation())

  return (
    <div className='bg-primary d-flex align-items-center  p-2' style={{justifyContent: 'space-between'}}>

    <div className="user-content d-flex justify-content-center align-items-center">
    <img src={auth?.currentUser.photoURL} alt=""
    style={{width: '15%', borderRadius: '50%', marginRight: '1rem'}}
    />
      <h3>{auth?.currentUser.displayName}</h3>
    </div>

    <div className="email d-flex justify-content-center align-items-center" style={{gap:'1rem'}}>

{( location.pathname === '/blogs') && (<Link to={'/addblog'} className='btn btn-warning'>AddBlog</Link>)}

{( location.pathname !== '/blogs') && (<Link to={'/blogs'} className='btn btn-warning'>BackToBlogs</Link>)}

      <h5>{auth?.currentUser.email}</h5>
      <button
      onClick={logOut}
      className='btn btn-danger'>Log Out</button>
    </div>

    </div>

    
  )
}

export default Navbar
