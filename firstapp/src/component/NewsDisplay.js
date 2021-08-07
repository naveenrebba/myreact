import React from 'react';
const NewsDisplay=(props)=>{
    console.log(props)
    const rendernews=props.newsdata.map((data)=>{
        return(
            <div>
                <h2>{data.title}</h2>
                <p>{data.feed}</p>
            </div>
        )
    })
    return(
        <h1>{rendernews}</h1>
    )
}
export default NewsDisplay