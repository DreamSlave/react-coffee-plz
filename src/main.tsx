import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "@/store/index";

// const store = configureStore({reducer : rootReducer});
import { store, persistor } from './store'; // Redux 스토어와 persistor 가져오기
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)