import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "@/store/counter";

const store = configureStore({reducer : {
    counter: rootReducer,
  }});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
