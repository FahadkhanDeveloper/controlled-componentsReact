import React, { Component } from "react";

export default class Tasks extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.state = {
      item: "",
      list: [],
    };
  }
  handleChange(e) {
    this.setState({
      item: e.target.value,
    });
  }

  // task 2 when you submit form then value in text field will be erased
  // handleSubmit(e) {
  //   e.preventDefault()
  //   this.setState({
  //     list:this.state.list.concat(this.state.item) ,
  //  step 1
  //     item:""
  //   })
  //     step 2
  //   e.target.value=this.state.item
  // }

  // Task 2 empty value should not be added  already existance item should not be added
  // handleSubmit(e) {
  //   e.preventDefault()
  //   if(this.state.item == ""){
  //     alert("Empty item not allowed")
  //   }
  //   else if(this.state.list.indexOf(this.state.item) < 0) {
  //     this.setState({
  //       list:this.state.list.concat(this.state.item) ,
  //       item:""
  //     })

  //   e.target.value=this.state.item
  //   }
  //   else {
  //     alert("Item already exists")
  //   }
  // }

  //task 2 again same as above using this.state.list.inculdes(this.state.list.item)

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.item == "") {
      alert("Empty item not allowed");
    } else if (this.state.list.includes(this.state.item)) {
      alert("item already exists");
    } else {
      this.setState({
        list: this.state.list.concat(this.state.item),
        item: "",
      });
      e.target.value = this.state.item;
    }
  }
  handleFocus(e) {
    e.target.value = "";
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
            //  task 1 click on text field then value will be removed from text field it will be done by onfocus
            onFocus={this.handleFocus}
          />
          <button>Add</button>
        </form>
        <ul>
          {this.state.list.map((l, i) => (
            <li key={i}> {l} </li>
          ))}
        </ul>
        <button
          onClick={() =>
            this.setState({
              list: [],
            })
          }
        >
          Reset
        </button>
      </div>
    );
  }
}
