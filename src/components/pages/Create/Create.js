import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Create.css";
import axios from 'axios';

class Create extends Component{
  constructor(){
    super()
    this.state ={
       title:'',
       category:'',
       conclusion:'',
       description:''
    }
    this.changetitle =this.changetitle.bind(this)
    this.changecategory =this.changecategory.bind(this)
    this.changeconclusion =this.changeconclusion.bind(this)
    this.changedescription =this.changedescription.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

changetitle(event){
  this.setState({
    title:event.target.value
  })
}
changecategory(event){
  this.setState({
    category:event.target.value
  })
}
changeconclusion(event){
  this.setState({
    conclusion:event.target.value
  })
}
changedescription(event){
  this.setState({
    description:event.target.value
  })
}

onSubmit(event){
  event.preventDefault()

  const blog ={
    title: this.state.title,
    category: this.state.category,
    conclusion: this.state.conclusion,
    description: this.state.description
  }

  axios.post('http://localhost:4000/app/blog/Create', blog)
      .then(Response => console.log(blog.data))

  window.location ='/published'    
}

render() {
  return (
    <div className='at'>
    <div className='aw'>
      <h1><center>Create a Blog</center></h1>
      <form onSubmit={this.onSubmit}>
        <div className='em'>
          <label htmlFor="em">Title</label>
          <input type='text'  placeholder="Enter Title of the blog" 
          onChange={this.changetitle}
          value={this.state.title} />
        </div>
        <div className='fnn'>
          <label htmlFor="fnn">Category</label>
          <input type='text'  placeholder="technology,politics,environment" 
           onChange={this.changecategory}
           value={this.state.category} />
        </div>
        <div className='fnn'>
              <label htmlFor="fnn">Conclusion</label>
              <textarea   name='conclusion' id='conclusion' placeholder="Summary"
               onChange={this.changeconclusion}
               value={this.state.conclusion} >             
              </textarea>
        </div>
        <div className='fnn'>
              <label htmlFor="fnn">Description</label>
              <textarea   name='description' id='description' placeholder="Blog"
               onChange={this.changedescription}
               value={this.state.description} >             
              </textarea>
        </div>
        <div className='gya'>
         <button className='but' >Publish</button>
        </div>
      </form>
  
    </div>
  </div>
  );
}
}
export default Create