import { applyDecorators } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export function UsersDocsFindOne() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Retorna informações sobre o perfil do usuário ligado ao token se o token for válido',
    }),

    ApiOkResponse({
      description: 'Retorna as informações do perfil',
      schema: {
        example: {
          _id: 1,
          _name: 'Fernanda Oliveira',
          _email: 'fernanda.oliveira@example.com',
          _birthday: '1995-04-10T00:00:00.000Z',
          _weight: 60,
          _height: 167,
          _password: 'SenhaCriptografada',
          _workoutsFrequency: '5 vezes por semana',
          _goals: 'Definir músculos e manter energia',
          _foodRestrictions: 'Lactose, nozes',
          _foodPreferences: 'Vegetariana, prefere pratos quentes no almoço',
        },
      },
    }),

    ApiUnauthorizedResponse({
      description: 'Cliente enviou um token inválido ou expirado',
      schema: {
        example: {
          message: 'Unauthorized',
          statusCode: 401,
        },
      },
    }),
  );
}
