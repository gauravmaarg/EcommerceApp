import Directory_Data from './homepage.data';

const INITIAL_STATE = {
   sections: Directory_Data
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;