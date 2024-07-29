import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recentPosts: [],
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addRecentPosts: (state, action) => {
            state.recentPosts = action.payload;
        },
    },
});

export const { addRecentPosts } = postsSlice.actions;

export default postsSlice.reducer;
