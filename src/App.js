import logo from './logo.svg';
import './App.css';
import tweetLogo from './tweet.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={tweetLogo} className="App-logo" alt="logo"/>
        <p>
          TweetyFind
        </p>
        <a
          className="App-link"
          href="https://github.com/neztEx/tweetyfind"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git-Repo
        </a>
      </header>
    </div>
  );
}

export default App;
