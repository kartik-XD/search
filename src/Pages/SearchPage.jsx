import Search from '../components/Search';
import React from 'react';
import './SearchPage.css';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import SearchIcon from '@material-ui/icons/Search';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import MapIcon from '@material-ui/icons/Map';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue()
    const { data } = useGoogleSearch(term);
    const history= useHistory();
    console.log(data);
    
    if(typeof data && data==true){ 
    return (
        <div className="SearchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png" width="200" alt="file google logo svg wikimedia commons" alt="" className="searchPage_logo" />
                </Link>
                <div className="searchPage_headerbody"><Search></Search>
                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="searchPageoption">
                                <SearchIcon></SearchIcon>
                                <Link to="/">All</Link>
                            </div>
                            <div className="searchPageoption">
                                <DescriptionIcon></DescriptionIcon>
                                <a target='_blank' href="https://news.google.com/topstories">News</a>
                            </div>
                            <div className="searchPageoption">
                                <LocalOfferIcon></LocalOfferIcon>
                                <a target='_blank' href="https://www.google.com/shopping">Shopping</a>
                            </div>
                            <div className="searchPageoption">
                                <ImageIcon></ImageIcon>
                                <a target='_blank' href="https://www.google.com/imghp?hl=en">Images</a>
                            </div>
                            <div className="searchPageoption">
                                <MapIcon></MapIcon>
                                <a target='_blank' href="https://maps.google.com">Maps</a>
                            </div>
                        </div>
                        <div className="searchPage_optionsRight"></div>
                    </div>
                </div>
            </div>
               { true &&(
            <div className="searchPage_results">
                    <p className="resultcount">About {data?.searchInformation.formattedTotalResults} results( {data?.searchInformation.formattedSearchTime} seconds) for {term}</p>

                    {data?.items.map(item=>(
                        <div className="result">
                            <a target="_blank" href={item.link}>
                             {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src &&(<img className="resultimg" src={item.pagemap?.cse_image?.length>0&& item.pagemap?.cse_image[0]?.src}/>)}   
                            {item.displayLink}</a>
                            <a className="result_title" target="_blank" href={item.link}><h2>{item.title}</h2></a>
                            <p className="resultdesc">{item.snippet}</p>
                        </div>
                    ))}
            </div>
            )}
        </div>);
    }
    else{
        return(
            <div className="handleerror">
              <Link to="/">  <ErrorOutlineIcon style={{ fontSize: 400}}></ErrorOutlineIcon></Link>
            </div>
            )
    }
}

export default SearchPage;