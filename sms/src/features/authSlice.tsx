import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

interface User {
    id: string; 
    role: string;
}

interface AuthState { 
    isAuthenticated: boolean; 
    user: User | null;
}

const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        isAuthenticated: false,
        user: null
    } as AuthState, 
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.isAuthenticated = true;
            state.user = action.payload; 
        }, 
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null; 
        }
    }
})

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: { auth: AuthState; }) => state.auth;
export default authSlice.reducer;