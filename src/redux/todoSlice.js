import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


//fetching data
export const fetchTodo = createAsyncThunk("fetch!TODO", async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    return data.json()
})


//slicer
const todoSlice = createSlice({
    name:'todo',
    initialState:{
        isLoading: false,
        data: [],
        error: false
    },

    
extraReducers: (builder) =>{
    builder.addCase(fetchTodo.pending, (state, action) => {
        state.isLoading = true;
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload
    });
    builder.addCase(fetchTodo.rejected, (state, action) => {
        state.error = true;
    })

}

})


export default todoSlice.reducer;