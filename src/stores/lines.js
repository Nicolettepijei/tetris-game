import {RESET_SCORE} from './score'

// acitons
export const SET_LINES = 'SET_LINES'
export const setLines = lines => ({
  type: SET_LINES,
  lines
})

// state
const initialState = 0

// reducer
export default function reducer (previousLines = initialState, action) {
  switch (action.type) {
    case RESET_SCORE:
      return 0
    case SET_LINES:
      return action.lines
    default:
      return previousLines
  }
}

// selectors
export const getLines = state => state.lines
