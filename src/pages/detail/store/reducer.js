import * as constants from './constants.js'
import {fromJS} from 'immutable'

const defaultState=fromJS({
    con:[]
})
export default (state=defaultState,action)=>{

    if(action.type===constants.SHOW_CONTENTS){
        return state.set('con',1)
    }
    return state
}

