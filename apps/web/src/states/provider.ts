'use client'

import {  ReactNode } from 'react'
import { Provider } from "./index"
export const StateProviders = ({ children } : {children : ReactNode}) => {
  return (
    <Provider >
      {children}
    </Provider>
  )
}
