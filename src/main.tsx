import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalUIProvider } from './contexts/GlobalUIContext'; // GlobalUIProvider의 경로

import { store, persistor } from './store'; // Redux 스토어와 persistor 가져오기
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalUIProvider>
            <App />
          </GlobalUIProvider>
        </PersistGate>
    </Provider>
)
