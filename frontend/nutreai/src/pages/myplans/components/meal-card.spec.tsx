import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MealCard, MealsList } from './meal-card'

describe('MealCard', () => {
  it('renderiza o título, itens e calorias corretamente', () => {
    render(
      <MealCard
        icon="/fake-icon.png"
        title="Café da Manhã"
        items={['Ovo', 'Pão']}
        calories={350}
        onOpenMore={() => {}}
      />
    )

    expect(screen.getByText('Café da Manhã')).toBeInTheDocument()
    expect(screen.getByText('Ovo')).toBeInTheDocument()
    expect(screen.getByText('Pão')).toBeInTheDocument()
    expect(screen.getByText(/350 kcal/)).toBeInTheDocument()
  })
})

describe('MealsList', () => {
  it('renderiza uma lista de refeições', () => {
    const meals = [
      {
        tipoRefeicao: 'cafe_da_manha',
        descricao: 'Ovo,Pão',
        calorias: 300
      },
      {
        tipoRefeicao: 'almoco',
        descricao: 'Arroz,Feijão',
        calorias: 500
      }
    ]
    render(<MealsList meals={meals as any[] } onOpenDetails={() => { }} />)
    screen.debug()
    expect(screen.getByText('Cafe Da Manha')).toBeInTheDocument()
    expect(screen.getByText('Almoco')).toBeInTheDocument()
    expect(screen.getByText(/300 kcal/)).toBeInTheDocument()
    expect(screen.getByText(/500 kcal/)).toBeInTheDocument()
  })
})