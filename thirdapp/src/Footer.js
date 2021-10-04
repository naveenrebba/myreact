import React from 'react';
const Footer=(props)=>{
    console.log(props)
    return(
        <div>
            <hr/>
            <center>
                <h3>&copy;developer funnel, {props.year} {props.month}</h3>
            </center>
        </div>
    )
}
export default Footer;
