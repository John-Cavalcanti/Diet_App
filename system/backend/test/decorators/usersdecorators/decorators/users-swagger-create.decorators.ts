import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

export function UsersDocsCreate() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Retorna uma instância da classe User se a requisição do cliente seguir os padrões do Dto',
    }),

    ApiOkResponse({
      description: 'Cliente enviou uma requisição que segue os padrões do Dto',
      schema: {
        example: {
          _id: 1,
          _name: 'Fernanda Oliveira',
          _email: 'fernanda.oliveira@example.com',
          _birthday: '1995-04-10T00:00:00.000Z',
          _weight: 60,
          _height: 167,
          _password:
            '$2b$10$K9smdT5Hl9//KoP.1ouGCu3423lzoaiOhIcKP0hSKkV.HybVNKmIO',
          _workoutsFrequency: '5 vezes por semana',
          _goals: 'Definir músculos e manter energia',
          _foodRestrictions: 'Lactose, nozes',
          _foodPreferences: 'Vegetariana, prefere pratos quentes no almoço',
        },
      },
    }),

    ApiBadRequestResponse({
      description:
        'Cliente enviou uma requisição que não segue os padrões do Dto',
      schema: {
        example: {
          message:
            'Bad control character in string literal in JSON at position 107 (line 4 column 31)',
          error: 'Bad Request',
          statusCode: 400,
        },
      },
    }),
  );
}
