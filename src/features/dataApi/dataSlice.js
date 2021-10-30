
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getData = createAsyncThunk('/', async ()=>{
    return fetch('https://still-eyrie-66293.herokuapp.com/api/videos').then((res)=>
    res.json()
    )
})


const dataSlice = createSlice({
    name:"data",
    initialState:{
        status:null
    
},
reducers:{
[getData.pending] :(state,action) =>{
    state.status ="loading"
},
[getData.pending] :(state,action)=>{
    state.status ="success"
},
[getData.rejected]:(state,action)=>{
    state.status ="failed"}
}
}
)

export default dataSlice.reducer
