import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ErrorModal } from './erro-modal'

describe('ErrorModal', () => {
  it('deve renderizar quando isOpen for true', () => {
    const wrapper = render(<ErrorModal isOpen={true} handleClose={() => {}} error="Erro simulado" />)

    expect(wrapper.getByText('Houve um erro ao finalizar ao realizar sua requisição!')).toBeInTheDocument()
    expect(wrapper.getByText('Erro simulado')).toBeInTheDocument()
  })

  it('não deve renderizar nada se isOpen for false', () => {
    const { queryByText } = render(<ErrorModal isOpen={false} handleClose={() => {}} error="Erro invisível" />)

    expect(queryByText('Erro invisível')).not.toBeInTheDocument()
  })

  it('deve chamar handleClose ao clicar no botão de fechar', () => {
    const handleCloseMock = vi.fn()

    const wrapper = render(<ErrorModal isOpen={true} handleClose={handleCloseMock} error="Erro clicável" />)

    const closeButton = wrapper.getByRole('button', { name: "X" })
    fireEvent.click(closeButton)

    expect(handleCloseMock).toHaveBeenCalledTimes(1)
  })
})