import React, { createContext } from 'react';
import { Navigation, Scrollbar } from 'swiper'

import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

export const MainContext = createContext();

export default function Context(props) {
  return (
    <MainContext.Provider value={{
      Navigation, Scrollbar
    }}>
      {props.children}
    </MainContext.Provider>
  )
}