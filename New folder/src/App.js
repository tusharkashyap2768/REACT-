import React,{useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewCards from './components/NewsCards/NewsCards.js';
import Footer from './components/layout/Footer.js';
import Header from './components/layout/Header.js';
import './App.css';


const alankey ='6cf90c97ff11b50112af0bc4362d235d2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const[newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({command, articles}) => {
        if(command === 'newHeadlines')
        {
          setNewsArticles(articles);
        }
      }
    })
  },[])
  return (
  
     
  
    <div >
      <Header/>
      <h1> voice Ai based News Application </h1>
      <Footer/>
      <NewCards articles={newsArticles}/>
    </div>
  );
}

export default App;
