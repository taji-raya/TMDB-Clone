import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer'
//initial state 

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist'))
        : [],
}
//create context 

export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = props => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    }, [state])
    //actions to tell it what to do 
    const addToWatchlist = movie => {
        dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie })
    }

    const removeFromWatchlist = id => {
        dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: id })
    }
    return (
        <GlobalContext.Provider value={{ watchlist: state.watchlist, addToWatchlist,removeFromWatchlist }}>
            {props.children}
        </GlobalContext.Provider>
    )
}