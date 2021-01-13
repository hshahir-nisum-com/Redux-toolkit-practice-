import {createSlice} from '@reduxjs/toolkit';


const  counterSlicer = createSlice({
    name : "counter",
    initialState :{
        count : 0
    },
    reducers : {
        incr(state){
            state.count +=1
        },
        decr(state){
            state.count -=1
        }
    }
})


export  const { reducer, actions } = counterSlicer;
