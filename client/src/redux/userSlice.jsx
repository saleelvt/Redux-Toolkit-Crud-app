import { createSlice } from "@reduxjs/toolkit";


const initialState={
    users:[]
}

const userSlice =createSlice({
    name:'users',
    initialState,
    reducers:{
        login:()=>{

        }
    }
})
export default userSlice.reducer

export const  {login} = userSlice.actions;
