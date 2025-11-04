import React from 'react'
import InputBox from './components/inputBox'
import Summarybox from './components/summarybox'
import { SummaryProvider } from './context/summary'

const App = () => {
  return (
    <SummaryProvider>
      <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100">
        <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
          <div className="mx-auto max-w-3xl px-4 py-4">
            <h1 className="text-xl md:text-2xl font-semibold text-slate-800">AI Notes Summarizer</h1>
            <p className="text-sm md:text-base text-slate-500">Paste your notes, choose a length, get a clean summary.</p>
          </div>
        </header>
        <main className='mx-auto max-w-3xl px-4 py-6 md:py-10 flex flex-col gap-6 md:gap-8'>
          <InputBox />
          <Summarybox />
        </main>
        <footer className="py-6 text-center text-xs text-slate-400">Built for focus and clarity.</footer>
      </div>
    </SummaryProvider>
  )
}

export default App