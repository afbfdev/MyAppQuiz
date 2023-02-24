import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";

export const getUser = createAsyncThunk('Users/getUser', async({user}) => {
    console.log(user)
    return axios
        .post('http://localhost:9000/logIn', user)
        .then(res => {return res.data})
        .catch(error => {return error.data.message})

})

const userSlice = createSlice({
    name: 'Users',
    initialState : {
        user: {},
        status: '',
        error: ''

    },

    reducers : {
        
    },

    extraReducers : {
        [getUser.fulfilled] : (state, action) => {
            if(typeof action.payload === 'string'){
                state.error = action.payload
                console.log(state.error)
            } else {
                state.user = action.payload;
                state.status = 'Success';
                console.log(state.status);
                localStorage.setItem('user', JSON.stringify(action.payload))
                console.log(localStorage.user)

            }
        },

        [getUser.rejected] : (state,action) => {
            state.error = action.payload;
            state.status = 'Rejected'
        },

        [getUser.pending] : (state) => {
            state.status = 'Inprogress...'
        }
    }
})

export default userSlice.reducer;