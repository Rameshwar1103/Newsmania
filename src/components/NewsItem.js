import React from 'react';
import './Style.css';

export default function NewsItem(props){
    let {title , description, imageUrl , url , author, date ,source ,style} = props;
   
    return (
      <div className='box'>
      <div className="card" style={{...style, borderColor:style.color==="white"?"white":"lightgray"}}  >
        <img src={imageUrl}  className="card-img-top" alt="..."/>
        <div className="card-body" >
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small>By {author?author:"unknown"} on {new Date(date).toUTCString()}</small></p>
          <div className="d-flex justify-content-between">
          <a href={url} className="btn btn-sm btn-primary">Read more</a>
          <span className="badge text-bg-light">{source}</span>
          </div>
        </div>
     </div>
     </div>
    )
  
}

// 9d0790d32c194a9a94160c8d5f733d83 api key
