import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer } from 'react'
import type { State, Action } from './types.d.ts'

// 1. create an initialState
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. create a reducer
function reducer(state: State, action: Action) {
  const { type } = action

  if(type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if(type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if(type === 'SET_TO_LANGUAGE') {
    return {
      ...state, 
      toLanguage: action.payload
    }
  }

  if(type === 'SET_FROM_TEXT') {
    return {
      ...state, 
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if(type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

function App() {

  // 3. use th ehook usereducer
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>Google Translate</h1>
    </div>
  )
}

export default App
