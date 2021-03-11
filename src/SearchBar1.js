import React, {Component} from 'react'
import SelectIndex from './components/SelectIndex'
import TweetList from './TweetList.js';
import TweetList1 from './TweetList1';

const postLucene = [
    { id: '1', handle: '@lucene', tweet: 'This is tweet, with #name'},
    { id: '2', handle: '@lucene', tweet: 'This is tweet223, with #awesome'},
    { id: '3', handle: '@lucene', tweet: '#more #law #cool #tweet'},
    { id: '4', handle: '@lucene', tweet: 'The this another test #things'},
];

const postHadoop = [
    { id: '1', handle: '@hadoop', tweet: 'This is tweet, with #tweet'},
    { id: '2', handle: '@hadoop', tweet: 'This is tweet223, with #awesome'},
];
const SearchBar1 = () => {
    const [query, setQuery] = React.useState('')
    const [tweetList, setTweetList] = React.useState([])
    const [switchValue, setSwitchValue] = React.useState(false);

    const BarStyling = {width:"20rem",background:"#F2F1F9",border:"none",padding:"0.5rem"}
    
    const handleKeyPress = (event) => {

        if(event.key === 'Enter'){
          console.log(`
          Query: ${query}
          Index: ${switchValue}
          `);
          if(switchValue === false){
            setTweetList(postLucene)
          }
          else
            setTweetList(postHadoop)
        }
    }

    return (
        <>
        <label>
            <SelectIndex switchValue={switchValue} setSwitchValue={setSwitchValue} />
        <input
            style={BarStyling}
            key="random1"
            value={query}
            placeholder={"Search Tweets"}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            required
            />
        </label>
            {tweetList.length > 0 && <TweetList1 props={tweetList}/>}
        </>

    )

}
export default SearchBar1