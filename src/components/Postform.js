import React, { Component } from 'react'

 class Postform extends Component {
     constructor(){
         super()

         this.state = {
            title: '',
            body: ''
         }
         this.onChange = this.onChange.bind(this)
         this.onSubmit = this.onSubmit.bind(this)
     }
     //takes in an event parameter
     onChange(e) {
         this.setState({
            //  here we are setting e.target.name to the value entered into the input or textarea.
            // we get e.target.name from when we set the names of the input and textarea to match what was on state.
             [e.target.name]: e.target.value
            //  use the react chrome tool to see how you are changing state on post form while you type in the input or textarea.
         })
     }
     //takes in an event parameter
     onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }//post request with fetch
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            //modifing the boy to be json string
            body: JSON.stringify(post)
        })
        //taking response that we got from the request and telling it we want json data using res.json()
        .then(res => res.json())
        //and then get the data back
        .then(data => console.log(data))
     }

    render() {
        return (
            <div>
               <h1>Add Post</h1> 
               <form onSubmit={this.onSubmit} action="">
                   <div>
                       <label htmlFor=""> Title:</label>
                       <br/>
                       <input type="text" name='title'  onChange={this.onChange} value={this.state.title} />
                   </div>
                   <br/>
                   <div>
                       <label htmlFor=""> Body:</label>
                       <br/> 
                       <textarea name="body" onChange={this.onChange} value={this.state.body} ></textarea>
                   </div>
                   <br/>
                   <button type="submit" >Submit</button>
               </form>
            </div>
        )
    }
}

export default Postform
