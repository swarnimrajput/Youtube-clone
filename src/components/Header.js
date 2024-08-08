import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json } from "react-router-dom";
import { toggleMenu } from "./Utils/appslice";
import { YOUTUBE_SEARCH_API } from "./Utils/constants";
import { cacheResults } from "./Utils/Searchslice";

const Header = () => {
    const [searchquery,setsearchquery]=useState("");
    const [suggestions,setsuggestions]=useState([]);
    const [showsuggestions,setshowsuggestions]=useState(false);
    const searchcache = useSelector((store)=>store.search);
    const dispatch=useDispatch();
    
    useEffect(()=>{
        
       const timer=setTimeout(()=>{
        if(searchcache[searchquery]){
            setsuggestions(searchcache[searchquery])
        }
        else{
            getsearchquery();
        }
        },200) ;
       return()=>{
        clearTimeout(timer);
       };
    },[searchquery]);
    const getsearchquery=async()=>{
        
        const data =await fetch(YOUTUBE_SEARCH_API+ searchquery);
        const json = await data.json();
        setsuggestions(json[1]);
       dispatch(cacheResults({
        [searchquery]:json[1],
       }))
    }

    
    const togglemenuhandler = ()=>{
        dispatch(toggleMenu());
    }
  return (<div className="grid grid-flow-col p-5 m-2 shadow-lg">
    <div className="flex col-span-1">
        <img onClick={()=>togglemenuhandler()} className="h-8 cursor-pointer" alt="Menu" src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=512"/>
        <a href="/">
            <img className="h-8 mx-2" alt="youtube-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"/>
            </a>
    </div>
    <div className="col-span-10 px-10">
        <div>
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" 
        value={searchquery} onChange={(e)=>setsearchquery(e.target.value)}
        onFocus={()=>setshowsuggestions(true)}
        onBlur={()=>setshowsuggestions(false)}/>
        <button className="border border-gray-400 px-5 py-2 rounded-r-full">🔍</button>
        </div>
       {showsuggestions && (<div className="absolute bg-white py-2 px-2 w-[30rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
                {suggestions.map((s)=>(
                    <li key={s} className="py-2 shadow-sm hover:bg-gray-100">{s}</li>
                ))}
                
              
            </ul>
        </div>)}
       
    </div>
    <div className="col-span-1">
        <img className="h-8" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
    </div>
    </div>
  )
};

export default Header
