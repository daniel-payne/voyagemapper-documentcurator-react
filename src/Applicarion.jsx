
import { createStore } from 'redux'

//import { loadDocuments }   from './data/documents.es6'
//import { loadFacts     }   from './data/facts.es6'


import { reducer      } from './data/reducer.es6'

let serverAddress = 'http://localhost:5000/risk'

class Application {

    constructor( onDataChanged ){

        this.store = window.devToolsExtension ? window.devToolsExtension(reducer) : createStore(reducer)

        this.store.subscribe(() => {
           if (onDataChanged) onDataChanged( this.store.getState() ) 
        })

        this.currentDocumentIndex = undefined
        this.currentDocumentId    = undefined 
 
    }

    loadCountries(){

        return fetch('countries.json')  
            .then( (response) => {  

                if (response.status !== 200) {  
                    console.error('Looks like there was a problem. Status Code: ' +  response.status);  
                    return;  
                }

                response.json().then( (data) => {  

                    data.forEach( item => {

                      if (item.outline){
                          try{
                             item.outline = JSON.parse(item.outline)
                          } catch (err) {
                             item.outline = undefined
                             console.log([item.countryName, item.outline])
                          }
                        
                      }


                    })

                   this.countries = data

                });  

            })  
            .catch( (err) => {  

                console.error(['Fetch Error :-S', err])   

            });
                 
    }

    findCountry(name){

        if (! name) {
            return
        }

        let result 
        let match = name.toString().toUpperCase()

        this.countries.some( (country) => {

        if (
                ((country.countryId ) && country.countryId.toString()        === match) ||
                ((country.countyName) && country.countyName.toUpperCase()    === match) ||
                ((country.iso2Code  ) && country.iso2Code.toUpperCase()      === match) 
        ) {
            result = country;
            return true;
        }

        return false;

        }) 

        return result

    }

    loadDocuments(){

        let currentDocument

        let url = serverAddress + '/documents/uncurated'

        console.log('FETCHING ' + url)
        
        return fetch(url)  
            .then( (response) => {  
                     
                console.log('RECIEVED ' + url) 

                if (response.status !== 200) {  
                    console.error('Looks like there was a problem. Status Code: ' +  response.status);  
                    return;  
                }

                response.json().then( (data) => {  

                    console.log('PROCESSED ' + url) 

                    this.store.dispatch({ type: 'LOAD_DOCUMENTS', payload: data })

                    currentDocument = this.store.getState().selectedDocument

                    if (currentDocument){
                      this.chooseDocument(currentDocument)    
                    }


                });  

            })  
            .catch( (err) => {  

                console.error(['Fetch Error :-S', err])   

            });

 
    }


    chooseNextDocument(){

        let currentDocument

        this.store.dispatch({ type: 'INCREMENT_DOCUMENT_INDEX'}) 

        currentDocument = this.store.getState().selectedDocument

        if (currentDocument){
            this.chooseDocument(currentDocument)    
        }
    }

    choosePriorDocument(){

        let currentDocument

        this.store.dispatch({ type: 'DECEREMENT_DOCUMENT_INDEX'}) 

        currentDocument = this.store.getState().selectedDocument

        if (currentDocument){
            this.chooseDocument(currentDocument)    
        }
    }

    chooseDocument(currentDocument){

        if (! currentDocument.country) {
          currentDocument.country = this.findCountry(currentDocument.countryId)    
        }

        if (! currentDocument.facts) {

            let url = serverAddress + '/documents/'+ currentDocument.documentId + '/facts'

            console.log('FETCHING ' + url)
            
            return fetch(url)  
                .then( (response) => {  
                        
                    console.log('RECIEVED ' + url) 

                    if (response.status !== 200) {  
                        console.error('Looks like there was a problem. Status Code: ' +  response.status);  
                        return;  
                    }

                    response.json().then( (data) => {  

                        console.log('PROCESSED ' + url) 

                        currentDocument.facts = data;

                        this.store.dispatch({ type: 'LOAD_FACTS', payload: data  })
                    });  
                    
                })  
                .catch( (err) => {  

                    console.error(['Fetch Error :-S', err]);  

                });
        } else {
          this.store.dispatch({ type: 'LOAD_FACTS', payload: currentDocument.facts  })    
        }

    }

    setDocumentFactStatus(documentFactId, factStatus){

        this.store.dispatch({ type: 'SET_FACT_STATUS', payload: {documentFactId: documentFactId, factStatus: factStatus} })

        let url = serverAddress + '/documents/facts/' + documentFactId + '?FactStatus=' + factStatus.toUpperCase() 

        console.log('POSTING ' + url)
        
        return fetch( url, {method: 'POST'} )  
            .then( (response) => {  
                     
                console.log('RECIEVED ' + url) 

                if (response.status !== 200) {  
                    console.error('Looks like there was a problem. Status Code: ' +  response.status);  
                    return;  
                }

                response.json().then( (data) => {  

                    console.log('PROCESSED ' + url) 

                });  
                
            })  
            .catch( (err) => {  

                console.error(['Fetch Error :-S', err]);  

            });

    }

}

export {Application} 