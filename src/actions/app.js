import { NEXT, PREVIOUS, CHANGE_INPUT, GO_TO } from 'constants/action-types'

// Actions creators of the app

// Go to the next page
export const next = () => ({type: NEXT})

// Go to the previous page
export const previous = () => ({type: PREVIOUS})

// Save the input value in the state
export const changeInput = (value, type) => ({
  type: CHANGE_INPUT,
  payload: {
    value,
    type
  }
})

// Redirect to a specific page
export const goTo = (page) => ({
  type: GO_TO,
  payload: {
    page
  }
})

export default { next, previous, changeInput, goTo }
