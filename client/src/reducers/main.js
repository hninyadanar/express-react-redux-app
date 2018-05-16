import {
    CHANGE_CONTENT
} from '../actions/types';

export default function main(state = {
    changeContent: false,
    currentComponent: '1',
}, action) {
    switch (action.type) {
        case 'CHANGE_CONTENT':
            return {
                ...state,
                currentComponent: action.menuItem,
                changeContent: true
            }
        default: return state
    }
}