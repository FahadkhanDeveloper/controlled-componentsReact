import {Component} from 'react'
import axios from 'axios'
export default class Froms extends Component {
    constructor() {
        super();
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this);
        this.state={
            keyword: "",
            results:[]
        }
    }
async handleSubmit(e) {
    e.preventDefault();
// console.log(e)
// console.log(e.target.elements.search.value)
// console.log(this.state.keyword)
const key= "_6BxmIaoA4_E59wZFWYzf_2cfbVSZo7S-QMrnuDcLJE";
const term = this.state.keyword
const {data} = await axios.get(`https://api.unsplash.com/search/photos?client_id=${key}&query=${term}`)
//  console.log(data)
this.setState({
   results:data.results
})
}
handleChange(e) {
    this.setState({
        keyword:e.target.value
    })
}
render() {
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                 <input 
                 type="text" 
                 name="search" 
                 id="search" 
                 onChange={this.handleChange}
                 value={this.state.keyword}
                 />
                 <button id="btnSearch">Search</button>
            </form>
            <div>
                {
                    this.state.results.map((image,i) => <img src={image.urls.small} alt={image.urls.small} key={i} />)
                }
            </div>
        </div>
    )
}
}