import {Component} from 'react'
export default class Event extends Component {
  constructor() {
    super()
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(e) {
    // console.log(e.target.name)
    // console.log(e.target.id)
    if(e.target.id === '1') {
      console.log("Button 1 is Clicked")
    }
    else if(e.target.id == 2) {
      console.log("Button 2 is clicked")
    }
      
    
    

  }

render() {
  return(
    <div>
      <button 
         onClick={(e) => this.handleClick(e)}
         id="1"
         name="btn1"
         >Click 1
      </button>
      <button
         onClick={(e) => this.handleClick(e)}
         id="2"
         name="btn2"
         >Click 2
         </button>
    </div>
  )
}
}


