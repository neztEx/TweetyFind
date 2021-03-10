import React from 'react';
import { BackHandler } from 'react-native';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
    
    const BarStyling = {width:"20rem",background:"#F2F1F9",border:"none",padding:"0.5rem"}

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          console.log('enter press here! ')
          return true;
        }
    }

    return (

        <input
            style={BarStyling}
            key="random1"
            value={keyword}
            placeholder={"search tweets"}
            onChange={(e) => setKeyword(e.target.value)}
        />
    );
}
export default SearchBar