export interface Meal {
    tipoRefeicao: string,
    descricao: string,
    calorias: number,
    carboidratos: number,
    proteinas: number,
    gorduras: number
}

export interface WeeklyDiet{
  meals: {
    segunda: Meal[],
    terca: Meal[],
    quarta: Meal[],
    quinta: Meal[],
    sexta: Meal[],
    sabado: Meal[],
    domingo: Meal[]
  }
}