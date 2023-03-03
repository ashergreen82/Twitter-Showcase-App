import React from "react";
import heartPicture from "../images/heart.png";
import reTweetPicture from "../images/retweet.png";

function TweetDisplay({ data, setData }) {
    return (
        <div className="main_search background-color-bg-primary">
            <h2>{data.username}</h2>
            <p>{data.full_text}</p>
            <img src={data.image} alt="No Image Available" className="img-style"></img>
            <div className="tweet-icons container d-flex justify-content-center my-2 gx-1">
                <div className="tweet-icons d-flex">
                    <div className="col">
                        <img src={reTweetPicture} alt="Retweet: " className="img-icon" id="retweet_icon"></img>
                    </div>
                    <div className="col gl-5 mt-3 ">
                        <span className="img-value" id="retreat_Value">{data.retweet_count}</span>
                    </div>
                    <div className="col pl-1 mt-1">
                        <img src={heartPicture} alt="Favourited: " className="img-icon" id="favourite_icon"></img>
                    </div>
                    <div className="col mt-3">
                        <span className="img-value" id="favourite_value">{data.favorite_count}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TweetDisplay;