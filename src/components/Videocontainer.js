import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { youtube_API } from "./Utils/constants";
import Videocard from "./Videocard";

const Videocontainer = () => {
    const [videos,setvideos]=useState([]);
    useEffect(()=>{
        getVideos();
    },[])
    const getVideos=async()=>{
        const data = await fetch(youtube_API);
        const json = await data.json();
        
        setvideos(json.items)
    }
  return (
    <div className="flex flex-wrap ">
        {videos.map(video=><Link to={"/watch?v="+video.id}><Videocard key={video.id} info={video}/></Link>)}
        
    </div>
  )
};

export default Videocontainer
