export {} // 모듈 스코프를 방지하기 위해 추가

declare global {
  interface webkitMessageHandlers {
    closeCoffeePlz: {
      postMessage: (message: any) => void
    }
  }

  interface webkit {
    messageHandlers: webkitMessageHandlers
  }

  interface AndroidBridge {
    closeCoffeePlz: (value: boolean) => void
  }

  interface Window {
    webkit?: webkit,
    Android?: AndroidBridge
  }
}