import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todo: [],
}
const authSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addtodo: (state, action) => {
            console.log("Dispatched action:", action);
            state.todo.push(action.payload)
        },
        removetodo: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id != action.payload)
        },
        updatetodo: (state, action) => {
            console.log("Dispatched action:", action);

            const { id, texttodo } = action.payload
            const todo = state.todo.find((todo) => todo.id === id)
            if (todo) {
                todo.title = texttodo
            }
        },
    }
})
export const { addtodo, removetodo, updatetodo, setemp } = authSlice.actions
export default authSlice.reducer
