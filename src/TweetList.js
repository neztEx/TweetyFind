import React from 'react'

const TweetList = ({tweetList=[]}) => {
    return (
        <>
        {tweetList.map((data,index) => {
            if (data) {
                return (
                    <div key = {data.handle}>
                        <h3>{data.handle}</h3>
                    </div>
                )
            }
            return null
        }) }
        </>
    );
}

export default TweetList