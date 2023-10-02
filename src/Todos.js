import React, { Component } from 'react'

export default class Todos extends Component {
    constructor() {
        super()
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleFocus=this.handleFocus.bind(this)
        this.state={
            item:"",
            list:[]
        }
    }
    handleChange(e) {
       this.setState({
        item: e.target.value
       })
    }
    handleSubmit(e) {
      e.preventDefault()
      this.setState({
        list:this.state.list.concat(this.state.item) ,
        item:""
      })
      e.target.value=this.state.item
      
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input 
             type="text"
             id="item"
             name="item"
             value={this.state.item}
             onChange={this.handleChange}
            />
            <button>Add</button>
        </form>
        <ul>
            {
                this.state.list.map((l,i) => <li key={i}> {l} </li>)
            }
        </ul>
        
      </div>
    )
  }
}
