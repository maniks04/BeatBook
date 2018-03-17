const initialState = {
    website : 'poop'
}


const reducer = function(state = initialState, action) {

    switch (action.type) {
        case 'POOP' :
          return Object.assign({}, state, {website: !state.website});
    }

}

export default reducer