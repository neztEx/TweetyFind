import React, {useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import TweetList from './TweetList';


const postLucene = [
    { id: '1', handle: '@smart', tweet: 'This is tweet, with #name'},
    { id: '2', handle: '@hand', tweet: 'This is tweet223, with #awesome'},
    { id: '3', handle: '@tweeter', tweet: '#more #law #cool #tweet'},
    { id: '4', handle: '@yahoo', tweet: 'The this another test #things'},
];

const postHadoop = [
    { id: '1', handle: '@smart', tweet: 'This is tweet, with #tweet'},
    { id: '2', handle: '@hand', tweet: 'This is tweet223, with #awesome'},
    { id: '3', handle: '@tweeter', tweet: '#more #law #cool #tweet'},
    { id: '4', handle: '@yahoo', tweet: 'The this another test #things'},
];

const SearchPage = (props) => {
    const[input, setInput] = useState('');
    const[tweetListDefault, setTweetListDefault] = useState();
    const[tweetList,setTweetList] = useState();

        // const fetchData = async () => {
        //     return await fetch('https://restcountries.eu/rest/v2/all')
        //     .then(response => response.json())
        //     .then(data => {
        //         setTweetList(data);
        //         setTweetListDefault(data);
        //     });
        // }   
    
        const updateInput = async (input) => {
            if(input.key === 'Enter'){
                console.log('enter press here! ')
            }
            const filtered = tweetListDefault.filter(tweet => {
                return tweet.name.toLowerCase().includes(input.toLowerCase())
            })
            setInput(input);
            // setTweetList(filtered);
        }

    // useEffect( () => {fetchData()},[]);

    return (
        <>
        <SearchBar
        input={input}
        onChange={updateInput}
        onKeyPress={updateInput}
        />
        <TweetList tweetList={tweetList}/>
        </>
    );

}
export default SearchPage