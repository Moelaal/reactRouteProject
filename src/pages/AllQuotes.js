import React,{useEffect} from 'react'
import QuoteList from '../components/quotes/QuoteList'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import useHttp from '../hooks/use-http'
import {getAllQuotes} from '../lib/api'



function AllQuotes() {
  const {sendRequest,status, data : loadingQuote,error} = useHttp(getAllQuotes,true);
  console.log(loadingQuote);

  useEffect(()=>{
    sendRequest()
  },[sendRequest]);

  if(status === 'pending'){
    return (
      <div className='centered'>
        <LoadingSpinner/>
      </div>
    )
  }

  if(error){
    return <p className='centered focus'>wrong data from the server</p>
  }

  if(status === 'completed' && (!loadingQuote || loadingQuote.length === 0) ){
    return <NoQuotesFound/>
  }

  return (
        <QuoteList quotes={loadingQuote} />
  )
}

export default AllQuotes