import type { SUPPORTED_LANGUAGES, AUTO_LANGUAGE } from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type fromLanguage = Language | AutoLanguage

export interface State {
    fromLanguage: string,
    toLanguage: string,
    fromText: string,
    result: string,
    loading: boolean
}

export type Action = 
  | { type: 'SET_FROM_LANGUAGE'; payload: fromLanguage }
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_TO_LANGUAGE'; payload: Language }
  | { type: 'SET_FROM_TEXT'; payload: string }
  | { type: 'SET_RESULT'; payload: string }
