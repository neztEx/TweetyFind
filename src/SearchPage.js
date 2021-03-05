import React, {useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import TweetList from './TweetList';

const SearchPage = (props) => {
    const[input, setInput] = useState('');
    const[tweetListDefault, setTweetListDefault] = useState();
    const[tweetList,setTweetList] = useState();

        const fetchData = async () => {
            return await fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => {
                setTweetList(data);
                setTweetListDefault(data);
            });
        }   
    
        const updateInput = async (input) => {
            const filtered = tweetListDefault.filter(tweet => {
                return tweet.name.toLowerCase().includes(input.toLowerCase())
            })
            setInput(input);
            setTweetList(filtered);
        }

    useEffect( () => {fetchData()},[]);

    return (
        <>
        <SearchBar
        input={input}
        onChange={updateInput}
        />
        {/* <TweetList tweetList={tweetList}/> */}
        </>
    );

}
export default SearchPage