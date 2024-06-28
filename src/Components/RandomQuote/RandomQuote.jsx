import React, { useState } from 'react'
import "./RandomQuote.css"
import twitter_icon from '../Assets/twitter.png'
import reload_icon from '../Assets/sync.png'

const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes(){
        const response =await fetch("https://type.fit/api/quotes");
        quotes = await response.json()
    }

    const random = ()=>{
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select);
    }

    const [quote,setQuote] = useState({
        text:"Ronaldo is the G.O.A.T",
        author:"Romit Gupta",
    });

    const twitter = ()=>{
        window.open(
          `https://twitter.com/intent/tweet?text=${quote.text}  -  ${
            quote.author.split(",")[0]
          }`
        );
    }

    loadQuotes();
  return (
    <div className='Container'>
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author">- {quote.author.split(',')[0]}</div>
            <div className="icons">
                <img src={reload_icon} onClick={()=>{random()}} alt="" height='30px'/>
                <img src={twitter_icon} onClick={()=>{twitter()}} alt="" height='30px'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RandomQuote
