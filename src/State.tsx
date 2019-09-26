import React, { createContext, useReducer } from 'react';
import { func } from 'prop-types';

let AppContext = createContext();

const initialState = {
    count: 0
}

let reducer = (state: any, action: any) => {
    switch(action.type){
        case "setCount": {
            return { ...state, count: action.user }
        }
    }

    return state;
}

function AppContextProvider(props: any){
    const fullInitalState = {
        ...initialState,
    }

    let [state, dispatch] = useReducer(reducer, fullInitalState);
    let value = { state, dispatch };

    return(
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    );
}

let AppContextConsumer = AppContext.Consumer;

 