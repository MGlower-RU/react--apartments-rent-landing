import React, { createContext } from 'react';
import { Navigation, Scrollbar } from 'swiper'

import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

export const MainContext = createContext();

export default function Context(props) {
  // make modules work like modules[propModuleString]
  const modules = {
    navigation: Navigation,
    scrollbar: Scrollbar
  }

  return (
    <MainContext.Provider value={{
      Navigation, Scrollbar, modules
    }}>
      {props.children}
    </MainContext.Provider>
  )
}