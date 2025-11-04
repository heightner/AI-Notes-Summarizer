import React from 'react'
import { Toaster } from 'react-hot-toast'
import InputBox from './components/inputBox'
import Summarybox from './components/summarybox'
import { SummaryProvider } from './context/summary'

const App = () => {
  return (
    <SummaryProvider>
      <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 lg:flex lg:flex-col xl:flex xl:flex-col">
        <header className="border-b border-indigo-100 bg-white/70 backdrop-blur-md shadow-sm">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  AI Notes Summarizer
                </h1>
              </div>
            </div>
          </div>
        </header>
        <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-6 md:gap-8 lg:flex-row lg:gap-x-8 lg:flex-1 w-full'>
          <InputBox />
          <Summarybox />
        </main>
      </div>
      <Toaster position="top-right" toastOptions={{
        style: { 
          background: '#ffffff', 
          color: '#111827', 
          border: '1px solid #e0e7ff',
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
        },
        success: { iconTheme: { primary: '#4f46e5', secondary: '#ffffff' } },
        error: { iconTheme: { primary: '#ef4444', secondary: '#ffffff' } }
      }} />
    </SummaryProvider>
  )
}

export default App