//Constants
export const SEARCH_TYPING = "SEARCH_TYPING"
export const SEARCH_SUBMIT = "SEARCH_SUBMIT"

//Action Creators
export const autofillSearch = (value) => {
	
  return {
    type: SEARCH_TYPING,
	autofillTitle: "Skepta - Shutdown",
	autofillLink: "https://www.youtube.com/watch?v=MQOG5BkY2Bc"  
	
  }
}

export const resultsSearch = (value) => {
	
  return {
    type: SEARCH_SUBMIT,
    value
  }
}
