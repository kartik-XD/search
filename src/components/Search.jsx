import React,{useState} from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
const Search = () => {
    const[{},dispatch]=useStateValue();
    const[input, setinput]= useState("");
    const history= useHistory();
    const handlechange=(e)=>{
        
        setinput(e.target.value);
        
    }
    const handlekeypress=(e)=>{
        if(e.key==='Enter'){
            dispatch({
                type: actionTypes.SET_SEARCH_TERM,
                term: input,
            });
            history.push("/search")
        }
    };

    
    
return ( <div className="search">
        <div className="search_input">
            <SearchIcon className="search_icon"></SearchIcon>
            <input value={input} onChange={e=>handlechange(e)} onKeyPress={e=>handlekeypress(e)}></input>
            <MicIcon className="mic_icon"></MicIcon>

        </div>
    </div>  );
}
 
export default Search;