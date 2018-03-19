export const initialState = {
    loginModalStatus: false
}


const reducer = function(state = initialState, action) {
  switch (action.type) {
    case 'OPENLOGINMODAL' :
      return Object.assign({},  state, {loginModalStatus:true})
    case 'CLOSELOGINMODAL' :
      return Object.assign({},  state, {loginModalStatus:false})
    default :
      return state
}

}

export default reducer