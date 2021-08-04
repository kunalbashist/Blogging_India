import React from 'react';
import { Link } from 'react-router-dom';
import "./Published.css";

function Published() {
    return (
        <div className="st">
        <div>
           <img
        className="writeImg"
        src="images/createpic.jpg"
        alt="pic"
      /> 
        </div>
        <div className='hed'>
        <h1><center>Thank You For Writing a Blog</center></h1>
        </div>
        <div>
           <Link to='/blog'> <button class='bl btn-light'>Blogs</button></Link>
        </div>
      </div>  
    )
}

export default Published
