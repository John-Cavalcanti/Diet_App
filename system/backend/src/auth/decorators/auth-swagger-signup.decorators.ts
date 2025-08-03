/* eslint-disable prettier/prettier */
import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiCreatedResponse, ApiConflictResponse, ApiBadRequestResponse } from "@nestjs/swagger";
import { mockLogInAccessToken } from "../constants/constants";

export function AuthSwaggerDocsSignUp() {
    return applyDecorators(
        ApiOperation({
            summary: 'Recebe informações do cliente, verifica se elas seguem as regras estabelecidas e cria um novo usuário caso não ocorra nenhum erro. Além disso, retorna um TOKEN autenticado, para que o usuário estejam logado logo após o signup',
        }),

        ApiCreatedResponse({
            description: 'Cliente teve todas suas informações verificadas, elas seguem as regras e, portanto, o usuário será criado.',
            schema: {
                example: mockLogInAccessToken,
            }
        }),

        ApiConflictResponse({
            description: 'Cliente tentou criar uma conta com um email já registrado.',
            schema: {
                example: {
                    "message": "Email já está em uso.",
                    "error": "Conflict",
                    "statusCode": 409
                }
            }
        }),

        ApiBadRequestResponse({
            description: 'Cliente passou informações com tipos de dados inválidos, não seguindo as regras para cada campo de dados.'
        })

    )
}
