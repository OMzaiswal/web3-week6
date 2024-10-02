import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchpad'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {

  return (
    <div>
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/4e2GZzAHXiBTaK01OQzlJZnfxJnt-wFV"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider></WalletModalProvider>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 20
          }}>
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
          <TokenLaunchpad />
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App
