import React from 'react';
import Friends from "./Friends";
import StoreContext from "../../../StoreContext";

const FriendsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()
                return <Friends friends={state.sidebar.friends}/>
            }
            }
        </StoreContext.Consumer>
    );
};

export default FriendsContainer;