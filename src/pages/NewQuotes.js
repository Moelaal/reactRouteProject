import React ,{useEffect} from 'react'
import {addQuote} from '../lib/api'
import useHttp from '../hooks/use-http'
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm'


function NewQuotes() {
  const {sendRequest,status} = useHttp(addQuote)

  const history =  useHistory();

  useEffect(() => {
    if(status === 'completed'){
      history.push('/quote')
    }
  },[status,history])

  const addQuoteHandler = quoteData =>{
    sendRequest(quoteData)
  }
  
  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
  )
}

export default NewQuotes