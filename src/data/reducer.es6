import { createStore } from 'redux'
import Immutable       from 'immutable'

const initalCuratorState = {
  documents:             Immutable.List([]),
  facts:                 Immutable.List([]),
  selectedDocumentIndex: undefined,
  selectedFactIndex:     undefined,
  selectedDocument:      undefined,
  selectedFact:          undefined
}

function reducer(state = initalCuratorState, action = {type: undefined, payload: undefined}) {

  let result = state;

  switch (action.type) {
    case 'LOAD_DOCUMENTS':
    
      result =  {  ...state,  documents: Immutable.List( action.payload ), selectedDocumentIndex: 0 }
      break
    
    case 'LOAD_FACTS':
    
      result =  {  ...state,  facts:     Immutable.List( action.payload ), selectedFactIndex: 0 }
      break
    
    case 'INCREMENT_DOCUMENT_INDEX':
    
      result =  {  ...state, selectedDocumentIndex: state.selectedDocumentIndex + 1 }
      break
    
    case 'DECEREMENT_DOCUMENT_INDEX':
    
      result =  {  ...state, selectedDocumentIndex: state.selectedDocumentIndex - 1 }
      break
    
    case 'SET_FACT_STATUS':

      let factIndex = state.facts.findIndex( (item) => { 
                        return item.documentFactId === action.payload.documentFactId; 
                      })
      let oldFact =  state.facts.get(factIndex);               
      let newFact =  { ...oldFact, factStatus: action.payload.factStatus}               

      let newFactList = state.facts.set(factIndex,newFact)

      result =  {  ...state, facts: newFactList }
      break
  }

  if (result.selectedDocumentIndex < 0) {
    result.selectedDocumentIndex = 0
  }

  if (result.selectedDocumentIndex > result.documents.count() - 1) {
    result.selectedDocumentIndex = result.documents.count() - 1
  }
 
  if (result.documents.count() > 0) {
    result.selectedDocument = result.documents.get(result.selectedDocumentIndex)
  }

  return result
  
}
 

export { reducer }