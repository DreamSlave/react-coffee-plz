import ReactDOM from 'react-dom';
import React, { createContext, useContext, useState, ReactNode, FunctionComponent } from 'react';
import Alert from "@/component/Alert";
import Confirm from '@/component/Confirm';

// Context 타입 정의
interface GlobalUIContextType {
  showAlert: (message: string, onCallBack?: () => void) => void;
  closeAlert: () => void;
  requestConfirm: (message: string, onConfirm: () => void, onCancel: () => void) => void;
  showLoading: () => void;
  hideLoading: () => void;
}

// 기본 컨텍스트 값 설정
const defaultState: GlobalUIContextType = {
  showAlert: () => {},
  closeAlert: () => {},
  requestConfirm: () => {},
  showLoading: () => {},
  hideLoading: () => {}
};

const GlobalUIContext = createContext<GlobalUIContextType>(defaultState);

export const useGlobalUI = () => useContext(GlobalUIContext);

interface GlobalUIProviderProps {
  children: ReactNode;
}

export const GlobalUIProvider: FunctionComponent<GlobalUIProviderProps> = ({ children }) => {
  const [alert, setAlert] = useState<{ isVisible: boolean; message: string; onCallBack: ()=> void }>({ isVisible: false, message: "", onCallBack: () => {} });
  const [confirm, setConfirm] = useState<{ isVisible: boolean; message: string; onConfirm: () => void; onCancel: () => void }>({ isVisible: false, message: "", onConfirm: () => {}, onCancel: () => {} });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showAlert = (message: string, onCallBack?: ()=> void) => {
    setAlert({ isVisible: true, message, onCallBack });
  };

  const closeAlert = () => {
    setAlert(prevState => ({
      ...prevState,
      isVisible: false
    }))
  };

  const requestConfirm = (message: string, onConfirm: () => void, onCancel: () => void) => {
    //test
    console.log(`abc`)

    setConfirm({ isVisible: true, message, onConfirm, onCancel });
  };

  const showLoading = () => {
    setIsLoading(true);
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  return (
    <GlobalUIContext.Provider value={{ showAlert, closeAlert, requestConfirm, showLoading, hideLoading }}>
      {children}
      {ReactDOM.createPortal(
        <Alert message={alert.message} onClose={closeAlert}  isOpen={alert.isVisible}/>,
        document.getElementById('global_layer') as HTMLElement
      )}
      {ReactDOM.createPortal(
        confirm.isVisible && <Confirm message={confirm.message} onConfirm={confirm.onConfirm} onCancel={confirm.onCancel} />,
        document.getElementById('global_layer') as HTMLElement
      )}
      {ReactDOM.createPortal(
        isLoading && <LoadingBar />,
        document.getElementById('global_layer') as HTMLElement
      )}
    </GlobalUIContext.Provider>
  );
};


// Alert Dialog Component
// const AlertDialog: FunctionComponent<{ message: string; onClose: () => void }> = ({ message, onClose }) => (
//   <div className="alert-dialog">
//     <p>{message}</p>
//     <button onClick={onClose}>Close</button>
//   </div>
// );

// Confirm Dialog Component
/* const ConfirmDialog: FunctionComponent<{ message: string; onConfirm: () => void; onCancel: () => void }> = ({ message, onConfirm, onCancel }) => (
  <div className="confirm-dialog">
    <p>{message}</p>
    <button onClick={onConfirm}>Confirm</button>
    <button onClick={onCancel}>Cancel</button>
  </div>
); */

// Loading Bar Component
const LoadingBar: FunctionComponent = () => (
  <div className="loading-bar">Loading...</div>
);
