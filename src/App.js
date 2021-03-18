// import logo from './logo.svg';
import './App.css';
import tweetLogo from './tweet.png'
import SearchPage from './SearchPage.js'
import SelectIndex from './components/SelectIndex.js'
import SearchBar1 from './SearchBar1'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={tweetLogo} className="App-logo" alt="logo"/>
        
        <h1>TweetyFind</h1>
        <SearchBar1/>
        
        <a
          className="App-link"
          href="https://github.com/neztEx/tweetyfind"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git-Repo TweetyFind
        </a>
        <a
          className="App-link"
          href="https://github.com/abdelrahim-hentabli/webscraping_indexing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git-Repo WebServer Indexing
        </a>
        
      </header>
    </div>
  );
}

export default App;
