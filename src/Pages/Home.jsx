import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../components/Search';
const Home = () => {
    return (<div className="home">
        <div className="home_header">
            <div className="header_left">
                {/* link--> react router */}
                <a href='https://about.google/'>About</a>
                <a href='https://chrome.google.com/webstore/category/extensions'>Store</a>
            </div>

            <div className="header_right">
                <a href='https://www.google.com/intl/en-GB/gmail/about/#'>Gmail</a>
                <a href='https://www.google.com/imghp?hl=en'>Images</a>
                <AppsIcon></AppsIcon>
                <Avatar></Avatar>
            </div>
        </div>
        <div className="home_body">
            <img src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png" width="200" alt="file google logo svg wikimedia commons" />
            <div className="home_input">
                <Search></Search>
            </div>
        </div>
    </div>);
}

export default Home;