import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {

    const[articles,setArticles] = useState([]);
    const[loading,setLoading] =  useState(true);
    const[page,setPage] = useState(1);
    const[totalResults,setTotalResults] = useState(0);
 
    const updatenews= async()=>{
      console.log(`this is apikey ${props.apikey}`);
      let url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
      setLoading(true);
      props.setProgress(10);
      let data = await fetch(url);
       props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles);
      setLoading(false);
      props.setProgress(100)
;    }
    
    useEffect(() =>{
     updatenews();
     setPage(page+1);
    },[])
    

    const fetchData = async()=>{
      setPage(page+1);
       let url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
    }


  
    // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };
    
  
    return (
      <div className='divv' >
         <h2 className='text-center'style={props.style}>Top Headlines</h2>
         {loading && <Spinner/>}
         <InfiniteScroll
            dataLength={articles.length} 
            next={fetchData}
            hasMore={(totalResults!==articles.length)}
            loader={<Spinner/>}
           
        >
        <div className='container'>
      <div className='row' style={props.style}>
      {
         articles.map((element)=>{
         return  <div className='col-md-4 my-4' key={element.url}>
         <NewsItem title={element.title?(element.title.slice(0,40)+"..."):""}
          description={element.description?(element.description.slice(0,80)+"..."):""} 
          imageUrl={element.urlToImage?element.urlToImage:"https://tse4.mm.bing.net/th?id=OIP.VYBdXKXsZgErD_YAwvOzvwHaE8&pid=Api&P=0&h=220"} 
          url={element.url}
          author={element.author}
          date ={element.publishedAt}
          source={element.source.name}
          style={props.style}
           />
       </div>
        
      })}
       

      </div>
      </div>
      
      </InfiniteScroll>
      <div className="d-flex flex-row-reverse" style={{position:'sticky',right:"20px",bottom:"20px"}}>
       <button type="button" hidden={window.scrollY <500} className="btn btn-success" onClick={scrollToTop}><i className="fa-solid fa-arrow-up"></i><br></br>TOP</button>
       
      </div> 
      </div>
    )
    
  
}

News.defaultProps ={
  title : "News",
  description : "",
  imageUrl :"https://tse4.mm.bing.net/th?id=OIP.VYBdXKXsZgErD_YAwvOzvwHaE8&pid=Api&P=0&h=220",
  url :"/",
  category :"general"
}
News. propTypes ={
 title :PropTypes.string,
 description : PropTypes.string,
 imageUrl:PropTypes.string,
 url:PropTypes.string,
 category : PropTypes.string,
}
