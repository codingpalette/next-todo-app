"use client";

import { Provider } from 'react-redux';
import {store} from '@/app/redux/store';

export default function ReduxWrapper({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
