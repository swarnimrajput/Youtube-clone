import { createSlice } from "@reduxjs/toolkit";

const chatslice = createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(25,1);
            state.messages.push(action.payload);
        }
    }
});
export const {addMessage}=chatslice.actions;
export default chatslice.reducer;