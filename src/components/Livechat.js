import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "./Utils/chatslice";
import { generateRandomName, makeRandomMessage } from "./Utils/Helper";
import store from "./Utils/store";

const Livechat = () => {
    const [Livemessage,setLivemessage]=useState("")
    const dispatch= useDispatch();
    const chatMessage=useSelector((store)=>store.chat.messages);
    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(
                addMessage({
                    name:generateRandomName( ),
                    message:makeRandomMessage(20),
                })
            )
        },2000);
        return ()=> clearInterval(i);
    },[])
  return (
    <>
  <div className=" w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
    <div>
    {chatMessage.map(c=><ChatMessage name={c.name} message={c.message}/>)}
    </div> 
   </div>
   <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
        e.preventDefault();
        

    
    dispatch(addMessage({
        name:"Swarnim Rajput",
        message:Livemessage,
    }))
    setLivemessage("");
   }}>
        <input className="px-2 w-90 border border-black" type="text" value={Livemessage} onChange={(e)=>{
            setLivemessage(e.target.value);
        }}/>
        <button className="px-2 mx-2 bg-green-100 ">Send</button>

    </form>
  </>
  )
};

export default Livechat
