// src/global.d.ts

interface EthereumProvider {
    isMetaMask?: boolean;
    request: (args: { method: string; params?: any[] }) => Promise<any>;
    on?: (...args: any[]) => void;
    removeListener?: (...args: any[]) => void;
  }
  
  interface Window {
    ethereum?: EthereumProvider;
  }
  