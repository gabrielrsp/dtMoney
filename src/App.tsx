import { GlobalStyle } from './styles/global';
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboar';
import { NewTransactionModal } from './components/NewTransactionModal';
import { useState } from 'react';


export function App() {


  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransaction() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransaction() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransaction} />
      
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransaction}
      />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

