import React, { createContext } from 'react';

export const MainContext = createContext();

export default function Context(props) {
  return (
    <MainContext.Provider value={{
      
    }}>
      {props.children}
    </MainContext.Provider>
  )
}