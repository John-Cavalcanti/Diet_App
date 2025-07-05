import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

export function WeeklyDietDocsFindOne() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Retorna a dieta ligada ao usuário a partir da análise do token que foi passado na requisição',
    }),
    ApiOkResponse({
      description:
        'Cliente informou um ID existente e que está ligado a alguma dieta',
      schema: {
        example: {
          segunda: [
            {
              tipoRefeicao: 'cafe_da_manha',
              descricao:
                'Aveia cozida (200g) com frutas (100g) e 1 colher de mel',
              calorias: 300,
              carboidratos: 40,
              proteinas: 10,
              gorduras: 10,
            },
            {
              tipoRefeicao: 'almoco',
              descricao:
                'Quinoa (150g) com legumes (100g) e tofu grelhado (100g)',
              calorias: 550,
              carboidratos: 60,
              proteinas: 25,
              gorduras: 20,
            },
            {
              tipoRefeicao: 'jantar',
              descricao:
                'Peito de frango grelhado (150g) com arroz integral (100g) e brócolis no vapor',
              calorias: 500,
              carboidratos: 40,
              proteinas: 35,
              gorduras: 15,
            },
            {
              tipoRefeicao: 'lanche',
              descricao: 'Suco de frutas (200g) com 1 colher de sopa de aveia',
              calorias: 150,
              carboidratos: 30,
              proteinas: 5,
              gorduras: 5,
            },
          ],
          terca: [
            {
              tipoRefeicao: 'cafe_da_manha',
              descricao:
                'Pão integral torrado (50g) com abacate (50g) e ovos mexidos (2 ovos)',
              calorias: 320,
              carboidratos: 20,
              proteinas: 18,
              gorduras: 15,
            },
            {
              tipoRefeicao: 'almoco',
              descricao:
                'Tofu grelhado (150g) com arroz integral (100g) e legumes',
              calorias: 520,
              carboidratos: 50,
              proteinas: 20,
              gorduras: 15,
            },
            {
              tipoRefeicao: 'jantar',
              descricao:
                'Salmão assado (120g) com quinoa (100g) e aspargos grelhados',
              calorias: 480,
              carboidratos: 35,
              proteinas: 30,
              gorduras: 22,
            },
            {
              tipoRefeicao: 'lanche',
              descricao:
                'Iogurte de soja (150g) com 1 colher de mel e frutas (100g)',
              calorias: 200,
              carboidratos: 30,
              proteinas: 10,
              gorduras: 10,
            },
          ],
          quarta: [
            {
              tipoRefeicao: 'cafe_da_manha',
              descricao:
                'Smoothie de banana (1 banana) com leite de amêndoas (200ml) e 1 colher de sopa de aveia',
              calorias: 250,
              carboidratos: 40,
              proteinas: 8,
              gorduras: 8,
            },
            {
              tipoRefeicao: 'almoco',
              descricao:
                'Quinoa (150g) com legumes (100g) e tofu grelhado (100g)',
              calorias: 550,
              carboidratos: 60,
              proteinas: 25,
              gorduras: 20,
            },
            {
              tipoRefeicao: 'jantar',
              descricao:
                'Peito de frango grelhado (150g) com quinoa (100g) e brócolis no vapor',
              calorias: 500,
              carboidratos: 30,
              proteinas: 35,
              gorduras: 10,
            },
            {
              tipoRefeicao: 'lanche',
              descricao:
                'Frutas (100g) com 1 colher de sopa de manteiga de amendoim',
              calorias: 150,
              carboidratos: 20,
              proteinas: 5,
              gorduras: 12,
            },
          ],
          quinta: [
            {
              tipoRefeicao: 'cafe_da_manha',
              descricao:
                'Pão integral torrado (50g) com abacate (50g) e ovos mexidos (2 ovos)',
              calorias: 320,
              carboidratos: 20,
              proteinas: 18,
              gorduras: 15,
            },
            {
              tipoRefeicao: 'almoco',
              descricao:
                'Tofu grelhado (150g) com arroz integral (100g) e legumes',
              calorias: 520,
              carboidratos: 50,
              proteinas: 20,
              gorduras: 15,
            },
            {
              tipoRefeicao: 'jantar',
              descricao:
                'Salmão assado (120g) com quinoa (100g) e aspargos grelhados',
              calorias: 480,
              carboidratos: 35,
              proteinas: 30,
              gorduras: 22,
            },
            {
              tipoRefeicao: 'lanche',
              descricao: 'Suco de frutas (200g) com 1 colher de sopa de aveia',
              calorias: 150,
              carboidratos: 30,
              proteinas: 5,
              gorduras: 5,
            },
          ],
          sexta: [
            {
              tipoRefeicao: 'cafe_da_manha',
              descricao:
                'Aveia cozida (200g) com frutas (100g) e 1 colher de mel',
              calorias: 300,
              carboidratos: 40,
              proteinas: 10,
              gorduras: 10,
            },
            {
              tipoRefeicao: 'almoco',
              descricao:
                'Quinoa (150g) com legumes (100g) e tofu grelhado (100g)',
              calorias: 550,
              carboidratos: 60,
              proteinas: 25,
              gorduras: 20,
            },
            {
              tipoRefeicao: 'jantar',
              descricao:
                'Peito de frango grelhado (150g) com arroz integral (100g) e brócolis no vapor',
              calorias: 500,
              carboidratos: 40,
              proteinas: 35,
              gorduras: 15,
            },
            {
              tipoRefeicao: 'lanche',
              descricao:
                'Iogurte de soja (150g) com 1 colher de mel e frutas (100g)',
              calorias: 200,
              carboidratos: 30,
              proteinas: 10,
              gorduras: 10,
            },
          ],
          sabado: [
            {
              tipoRefeicao: 'cafe_da_manha',
              descricao:
                'Smoothie de banana (1 banana) com leite de amêndoas (200ml) e 1 colher de sopa de aveia',
              calorias: 250,
              carboidratos: 40,
              proteinas: 8,
              gorduras: 8,
            },
            {
              tipoRefeicao: 'almoco',
              descricao:
                'Tofu grelhado (150g) com arroz integral (100g) e legumes',
              calorias: 520,
              carboidratos: 50,
              proteinas: 20,
              gorduras: 15,
            },
            {
              tipoRefeicao: 'jantar',
              descricao:
                'Salmão assado (120g) com quinoa (100g) e aspargos grelhados',
              calorias: 480,
              carboidratos: 35,
              proteinas: 30,
              gorduras: 22,
            },
            {
              tipoRefeicao: 'lanche',
              descricao:
                'Frutas (100g) com 1 colher de sopa de manteiga de amendoim',
              calorias: 150,
              carboidratos: 20,
              proteinas: 5,
              gorduras: 12,
            },
          ],
          domingo: [
            {
              tipoRefeicao: 'cafe_da_manha',
              descricao:
                'Pão integral torrado (50g) com abacate (50g) e ovos mexidos (2 ovos)',
              calorias: 320,
              carboidratos: 20,
              proteinas: 18,
              gorduras: 15,
            },
            {
              tipoRefeicao: 'almoco',
              descricao:
                'Quinoa (150g) com legumes (100g) e tofu grelhado (100g)',
              calorias: 550,
              carboidratos: 60,
              proteinas: 25,
              gorduras: 20,
            },
            {
              tipoRefeicao: 'jantar',
              descricao:
                'Peito de frango grelhado (150g) com quinoa (100g) e brócolis no vapor',
              calorias: 500,
              carboidratos: 30,
              proteinas: 35,
              gorduras: 10,
            },
            {
              tipoRefeicao: 'lanche',
              descricao: 'Suco de frutas (200g) com 1 colher de sopa de aveia',
              calorias: 150,
              carboidratos: 30,
              proteinas: 5,
              gorduras: 5,
            },
          ],
        },
      },
    }),

    ApiBadRequestResponse({
      description:
        'Cliente informou um ID que não tem nenhuma dieta ligada a ele',
      schema: {
        example: {
          message: 'Esse plano alimentar não existe no banco de dados',
          error: 'Bad Request',
          statusCode: 400,
        },
      },
    }),
  );
}
