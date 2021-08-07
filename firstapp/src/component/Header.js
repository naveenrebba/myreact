
import React,{Component} from'react';
import './Header.css';
class Header extends Component{
    constructor(){
        super()
        this.state={
            title:"react app",
            keyword:"user text here"
        }
    }
    handleChange=(event)=>{
        console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:"user text here"})
        this.props.userData(event.target.value)
    }
    render(){
        console.log("inside render")
        return(
            <header>
                <div className="logo">
                   <h3>{this.state.title}</h3>
                </div>
                <center>
                    <input onChange={this.handleChange}/>
                    <div style={{color:'white'}}>{this.state.keyword}</div>
                </center>
                <hr/>
            </header>
        )

    }

}
export default Header;


















/*import React from'react';
const Header=()=>{
    return(
        <header>
            <div>
               <h3>react app</h3>
            </div>
            <center>
                <input/>
                <div>user text Here</div>
            </center>
        </header>
    )
}
export default Header;
*/
