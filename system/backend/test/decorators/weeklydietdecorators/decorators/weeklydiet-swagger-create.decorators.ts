import { applyDecorators } from '@nestjs/common';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { weeklyDietExample } from '../../../weeklydietconstants/constants/constants';

export function WeeklyDietDocsCreate() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Cria uma dieta personalizada a partir das informações do perfil do usuário',
      description:
        'Essa rota agora está protegida, sendo necessário Token para acessar',
    }),
    ApiCreatedResponse({
      description:
        'O token do cliente é válido e as informações foram usadas para gerar uma nova dieta',
      schema: {
        example: weeklyDietExample,
      },
    }),

    ApiUnauthorizedResponse({
      description:
        'Cliente tentou criar uma dieta com um TOKEN expirado, ou sem TOKEN',
    }),

    ApiBadRequestResponse({
      description: 'Cliente tentou criar dieta para um usuário inexistente',
      schema: {
        example: {
          message: 'Bad Request',
          statusCode: 400,
        },
      },
    }),

    ApiInternalServerErrorResponse({
      description: 'IA gerou a mensagem em formato inválido',
      schema: {
        example: {
          statusCode: 500,
          message: 'Resposta da IA não está em formato JSON válido.',
          error: 'Internal Server Error',
        },
      },
    }),
  );
}
