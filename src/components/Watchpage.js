import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "./Utils/appslice";
import Commentscontainer from "./Commentscontainer";
import Livechat from "./Livechat";

const Watchpage = () => {
    const [searchparams]=useSearchParams();
    console.log(searchparams.get("v"));
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    })
  return (
    <>
    <div className="flex flex-col w-full">
    <div className="px-5 flex w-full">
      <div>
      <iframe width="1000"
      height="600" 
      src={"https://www.youtube.com/embed/"+searchparams.get("v")}
       title="YouTube video player" 
       frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
     
          <div className="w-full">
            <Livechat/>
          </div>
    </div>
    <Commentscontainer/>
    </div>
   
    </>
  )
};

export default Watchpage
