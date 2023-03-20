import { createSlice } from '@reduxjs/toolkit'



const userSlice = createSlice({
    name: "user",
    initialState: { value:{name: "Pedro", age: 0, email: "email@gmail.com" }},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {logim} = userSlice.actions
export default userSlice.reducer;
