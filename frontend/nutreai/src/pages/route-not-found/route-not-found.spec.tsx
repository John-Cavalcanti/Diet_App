import { render} from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { RouteNotFound } from '.'


describe('RouteNotFound', () => {
  it('exibe o título e a descrição do erro 404', () => {
    const wrapper = render(<RouteNotFound />, { wrapper: MemoryRouter })

    expect(wrapper.getByText('Erro 404')).toBeInTheDocument()
    expect(wrapper.getByText("Erro 404, página não encontrada")).toBeInTheDocument()
  })

  it('tem um link que leva para a página inicial', () => {
    const wrapper = render(<RouteNotFound />, { wrapper: MemoryRouter })

    const link = wrapper.getByText("Voltar para a página inicial")

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })
})