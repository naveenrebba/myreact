import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Footer from './component/Footer';
const App=()=>{
    return(
        <div>
        <Header/>
        <h1>say hi to react</h1>
        <h2>say bie to react</h2>
        <h3> today last free class</h3>
        <Footer/>
        </div>
    )

}
ReactDOM.render(<App/>,document.getElementById("root"))