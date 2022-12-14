
import './App.css';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"
import Feed from './components/Feed';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import LeftNavMenuItem from './components/LeftNavMenuItem';
import SearchResult from './components/SearchResult';
import SearchResultVideoCard from './components/SearchResultVideoCard';
import SuggestionVideoCard from './components/SuggestionVideoCard';
import VideoCard from './components/VideoCard';
import VideoDetails from './components/VideoDetails';
import { AppContext } from './context/contextApi';

function App() {
  return (

    <AppContext>
   <Router>
    <div className='flex flex-col h-full'>

      <Header />
      <Routes>
      <Route path='/' exact element={<Feed />}/>
      <Route path='/searchResult/:searchQuery' element={<SearchResult />}/>
      <Route path='/video/:id' element={ <VideoDetails />} />
      </Routes>
    </div>
   </Router>
    </AppContext>
  ); 
}

export default App;
