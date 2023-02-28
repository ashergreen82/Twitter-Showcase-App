import React from "react";
import heartPicture from "../images/heart.png";
import reTweetPicture from "../images/retweet.png";

function TweetDisplay({ data, setData, key }) {
    return (
        <div className="main_search background-color-bg-primary" key={key}>
            <h2>{data.username}</h2>
            <p>{data.full_text}</p>
            <img src={data.image} alt="No Image Available" className="img-style"></img>
            <div className="tweet-icons container d-flex justify-content-center my-2 gx-1">
                <div className="tweet-icons d-flex">
                    <div className="col">
                        <img src={reTweetPicture} alt="Retweet: " className="img-icon" id="retweet_icon"></img>
                    </div>
                    <div className="col">
                        <p className="img-value" id="retreat_Value">{data.retweet_count}</p>
                    </div>
                    <div className="col">
                        <img src={heartPicture} alt="Favourited: " className="img-icon" id="favourite_icon"></img>
                    </div>
                    <div className="col">
                        <p className="img-value" id="favourite_value">{data.favorite_count}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TweetDisplay;