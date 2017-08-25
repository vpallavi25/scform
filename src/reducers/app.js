import { NEXT, PREVIOUS, CHANGE_INPUT, GO_TO } from 'constants/action-types'

// initial state of the app
const initialState = {
  currentSection: 'yourInformation',
  currentStep: 1,
  sections: [
    {name: 'yourInformation', steps: [1, 2, 3]},
    {name: 'defendantsInfo', steps: [4, 5]},
    {name: 'claimInformation', steps: [6, 7]},
    {name: 'agentOfService', steps: [8]},
    {name: 'fillingFees', steps: [9]},
    {name: 'review', steps: [10]},
    {name: 'submit', steps: [11]}
  ],
  // form 1
  firstName: '',
  lastName: '',
  middleInitial: '',
  streetAddress: '',
  aptNumber: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  // address 2
  streetAddress_2: '',
  aptNumber_2: '',
  city_2: '',
  state_2: '',
  zip_2: '',
  // person 2
  firstName_person2: '',
  lastName_person2: '',
  middleInitial_person2: '',
  streetAddress_person2: '',
  aptNumber_person2: '',
  city_person2: '',
  state_person2: '',
  zip_person2: '',
  phone_person2: '',
  // person 2/
  mailDifferent: false,
  addPlainTiff: false,
  personType: '',
  // form 2
  fictitiousNameCorp: '',
  businessName: '',
  businessNameStatement: '',
  statementExpirationDate: '',
  // form 3
  firstName_suing: '',
  lastName_suing: '',
  middleInitial_suing: '',
  streetAddress_suing: '',
  aptNumber_suing: '',
  city_suing: '',
  state_suing: '',
  zip_suing: '',
  phone_suing: '',
  // address 2
  streetAddress_suing_2: '',
  aptNumber_suing_2: '',
  city_suing_2: '',
  state_suing_2: '',
  zip__suing2: '',
  // person 2
  firstName_suing_person2: '',
  lastName_suing_person2: '',
  middleInitial_suing_person2: '',
  streetAddress_suing_person2: '',
  aptNumber_suing_person2: '',
  city_suing_person2: '',
  state_suing_person2: '',
  zip_suing_person2: '',
  phone_suing_person2: '',
  // person 2/
  mailDifferent_suing: false,
  addPlainTiff_suing: false,
  personType_suing: '',
  // form 4
  fictitiousNameCorp_suing: '',
  businessName_suing: '',
  businessNameStatement_suing: '',
  statementExpirationDate_suing: '',
  // form 5
  moneyOwes: '',
  whyOwes: '',
  dateType: '',
  onSpecificDate: '',
  timePeriodFrom: '',
  timePeriodTo: '',
  moneyOwedCalculation: '',
  // form 6
  didYouAskToPay: '',
  reasonToNoAsk: '',
  whyDidSelectThisCourt: '',
  AttorneyClientDispute: '',
  twelveDisputes: '',
  courthouseZip: '',
  // form 7
  serveThePerson: '',
  // form 8
  fillingFeeOption: ''
}

export default function app (state = initialState, action) {
  let currentState = state
  switch (action.type) {
    // Redirect to a specific page
    case GO_TO:
      const goTo = state.sections.find(e => e.steps.find(el => el === action.payload.page))

      if (goTo) {
        currentState = {
          ...state,
          currentSection: goTo.name,
          currentStep: action.payload.page
        }
      }

      return currentState

    // Go to the next page
    case NEXT:
      const isNext = state.sections.find(e => e.steps.find(el => el === state.currentStep + 1))

      if (isNext) {
        currentState = {
          ...state,
          currentSection: isNext.name,
          currentStep: state.currentStep + 1
        }
      }

      return currentState

    // Go to the previous page
    case PREVIOUS:
      const isPrevious = state.sections.find(e => e.steps.find(el => el === state.currentStep - 1))

      if (isPrevious) {
        currentState = {
          ...state,
          currentSection: isPrevious.name,
          currentStep: state.currentStep - 1
        }
      }

      return currentState

    // Save the input value in the state
    case CHANGE_INPUT:
      return {
        ...state,
        [action.payload.type]: action.payload.value
      }

    default:
      return state
  }
}
