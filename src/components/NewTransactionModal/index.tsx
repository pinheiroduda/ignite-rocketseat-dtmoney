import Modal from 'react-modal'
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saidas.svg'
import closeImg from '../../assets/Botao-Fechar.svg'
import { Container, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >

      <button 
        type="button"
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
          <h2>Cadastrar transação</h2>

          <input 
            placeholder="Título" 
          />

          <input 
            type="number" 
            placeholder="Valor"
          />

          <TransactionTypeContainer>
            <button
              type="button"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </button>

            <button
              type="button"
            >
            <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </button>
          </TransactionTypeContainer>

          <input 
            placeholder="Categoria" 
          />

          <button type="submit">
            Cadastrar
          </button>
      </Container> 
    </Modal>
  )
}