import React from 'react'
import InputBox from './components/inputBox'
import Summarybox from './components/summarybox'
import { SummaryProvider } from './context/summary'

const App = () => {
  return (
    <SummaryProvider>
      <main className='w-screen flex flex-col gap-10'>
        <InputBox />
        <Summarybox />
      </main>
    </SummaryProvider>
  )
}

export default App