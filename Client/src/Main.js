import React, { useEffect, useState } from 'react';
import mainPicture from "./images/Inspired_motivational_Quotes-Small.png";
import Navbar from './Navbar';
import Tweet from "./components/TweetDisplay";

function Main({ bodyClass, setBodyClass }) {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([{}]);
    const [isSearching, setIsSearching] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [noTweetsFound, setNoTweetsFound] = useState(false);

    useEffect(() => {
        if (isSearching === true) {
            setBodyClass("");
        }
    }, [isSearching, setBodyClass])

    useEffect(() => {
        if (searchValue === "") {
            setIsSearching(false);
            setBodyClass("body-background");
        }
    }, [searchValue, setBodyClass, setIsSearching])

    const displayData = data.length ? (
        data.map((data, key) => {
            return (
                <div key={key}>
                    <Tweet
                        data={data}
                        setData={setData}
                    />
                </div>
            )
        })) : (
        <div className="main_search background-color-bg-primary">
            <h2>Sorry, No Tweets Found</h2>
        </div>
    );
    return (
        <>
            <div>
                <Navbar
                    data={data}
                    setData={setData}
                    setSearchValue={setSearchValue}
                    searchValue={searchValue}
                    setIsSearching={setIsSearching}
                    isSearching={isSearching}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                    setNoTweetsFound={setNoTweetsFound}
                    noTweetsFound={noTweetsFound}
                />
            </div>
            {!isSearching ? (
                <div className="main_header text-center">
                    <h1 className="h2">WELCOME TO</h1>
                    <h1 className="h1">THE SHOWCASE TWITTER APP</h1>
                    <p className="body_text text-justify">
                        Just enter your search in the search bar above and we will grab the last few tweets on twitter for you.  We also offer a random search as well, so feel free to give that shot.
                    </p>
                    <img src={mainPicture} alt="Twitter Screenshot" className="w-10" />
                </div>
            ) : (
                <div>
                    {displayData}
                </div>
            )}
        </>

    );
}

export default Main;