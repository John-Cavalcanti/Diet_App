import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Home from '.'

describe('Home', () => {
  it('renderiza título principal', () => {
    const wrapper = render(<Home />, { wrapper: MemoryRouter })

    expect(wrapper.getByText("Comece sua jornada com o")).toBeInTheDocument()
  })

  it('renderiza os três cards de recurso', () => {
    const wrapper = render(<Home />, { wrapper: MemoryRouter })

    expect(wrapper.getByText("Planeje suas refeições")).toBeInTheDocument()
    expect(wrapper.getByText("Use IA inteligente")).toBeInTheDocument()
    expect(wrapper.getByText("Alimente seu bem-estar")).toBeInTheDocument()
  })
})