import { applyDecorators } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

export function AuthSwaggerDocsLogIn() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Autentica o email e senha passados pelo cliente e retorna o token de acesso caso a autenticação não encontre nenhum erro.',
    }),
    ApiOkResponse({
      description: 'Cliente passou email e senha válidos.',
      schema: {
        example: {
          access_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiZmVybmFuZGEub2xpdmVpcmFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NTEyMDk0NzgsImV4cCI6MTc1MTIxMzA3OH0.TN48QRk_GHKb6R1yqbXpgy05osvc3pKoMaVyNTNuoRs',
        },
      },
    }),
    ApiUnauthorizedResponse({
      description:
        'Cliente passou email inexistente ou senha inválida / errada.',
      schema: {
        example: {
          message: 'A senha está incorreta',
          error: 'Unauthorized',
          statusCode: 401,
        },
      },
    }),
    ApiBadRequestResponse({
      description:
        'Cliente usou tipos de dados não compatíveis com os campos email ou senha ou não seguiu os padrões de senha.',
      schema: {
        example: {
          message: [
            'A senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número',
            'password must be longer than or equal to 8 characters',
          ],
          error: 'Bad Request',
          statusCode: 400,
        },
      },
    }),
  );
}
