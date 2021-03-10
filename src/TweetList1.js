import React from 'react'

const TweetList1 = ({props=[]}) => {
    console.log(props, 'line 4')
    return (
        <div>
            {props.map(tweet => {
                console.log(tweet.handle)
                return <p key={tweet.id}> {tweet.handle} : {tweet.tweet} </p>
            }
            )
            }
        </div>
    );
}

export default TweetList1