import ReactDOM from 'react-dom';
import React, { createContext, useContext, useState, ReactNode, FunctionComponent } from 'react';
import Alert from "@/component/Alert";
import Confirm from '@/component/Confirm';
import Loading from '@/component/Loading';

// Context 타입 정의
interface GlobalUIContextType {
  showAlert: (message: string, onCallBack?: () => void) => void;
  closeAlert: () => void;
  requestConfirm: (message: string, onConfirm: () => void, onCancel: () => void) => void;
  closeConfirm: () => void;
  showLoading: () => void;
  hideLoading: () => void;
  addAlert: (message: string, onCallBack?: () => void) => void;
}
type AlertType = {
  id: string;
  message: string;
  onCallBack?: () => void;
  isVisible: boolean;
};

// 기본 컨텍스트 값 설정
const defaultState: GlobalUIContextType = {
  showAlert: () => {},
  closeAlert: () => {},
  requestConfirm: () => {},
  closeConfirm:() => {},
  showLoading: () => {},
  hideLoading: () => {},
  addAlert: () => {}
};

const GlobalUIContext = createContext<GlobalUIContextType>(defaultState);

export const useGlobalUI = () => useContext(GlobalUIContext);

interface GlobalUIProviderProps {
  children: ReactNode;
}

export const GlobalUIProvider: FunctionComponent<GlobalUIProviderProps> = ({ children }) => {
  const [alerts, setAlerts] = useState<AlertType[]>([]);
  const [alert, setAlert] = useState<{ isVisible: boolean; message: string; onCallBack: ()=> void }>({ isVisible: false, message: "", onCallBack: () => {} });
  const [confirm, setConfirm] = useState<{ isVisible: boolean; message: string; onConfirm: () => void; onCancel: () => void }>({ isVisible: false, message: "", onConfirm: () => {}, onCancel: () => {} });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showAlert = (message: string, onCallBack?: ()=> void) => {
    setAlert({ isVisible: true, message, onCallBack });
  };

  const addAlert = (message: string, onCallBack?: ()=> void) => {
    const newAlert: AlertType = {
      id: (~~Math.random()*100) + '',
      message,
      onCallBack,
      isVisible: true
    };
    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
  }
  const deleteAlert = (id: string) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  };


  const closeAlert = () => {
    setAlert(prevState => ({
      ...prevState,
      isVisible: false
    }))
  };

  const requestConfirm = (message: string, onConfirm: () => void, onCancel: () => void) => {
    setConfirm({ isVisible: true, message, onConfirm, onCancel });
  };

  const closeConfirm = () => {
    setConfirm(prevState => ({
      ...prevState,
      isVisible: false
    }))
  }

  const showLoading = () => {
    setIsLoading(true);
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  return (
    <GlobalUIContext.Provider value={{ showAlert, closeAlert, requestConfirm, closeConfirm, showLoading, hideLoading }}>
      {children}
      {alerts.map((alert) =>
          ReactDOM.createPortal(
              <Alert
                  key={alert.id}
                  message={alert.message}
                  onClose={() => deleteAlert(alert.id)}
                  isOpen={alert.isVisible}
              />,
              document.getElementById('global_layer') as HTMLElement
          )
      )}
      {ReactDOM.createPortal(
        confirm.isVisible && <Confirm message={confirm.message} onConfirm={confirm.onConfirm} onCancel={confirm.onCancel} />,
        document.getElementById('global_layer') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <Loading isShow={isLoading}/>,
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
// const LoadingBar: FunctionComponent = () => (
//   <div className="loading-bar">Loading...</div>
//);
