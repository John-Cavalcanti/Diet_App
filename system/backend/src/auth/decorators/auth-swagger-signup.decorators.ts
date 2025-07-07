/* eslint-disable prettier/prettier */
import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiCreatedResponse, ApiConflictResponse, ApiBadRequestResponse } from "@nestjs/swagger";

export function AuthSwaggerDocsSignUp() {
    return applyDecorators(
        ApiOperation({
            summary: 'Recebe informações do cliente, verifica se elas seguem as regras estabelecidas e cria um novo usuário caso não ocorra nenhum erro.',
        }),

        ApiCreatedResponse({
            description: 'Cliente teve todas suas informações verificadas, elas seguem as regras e, portanto, o usuário será criado.',
            schema: {
                example: {
                    "_id": 1,
                    "_name": "Fernanda Oliveira",
                    "_email": "fernanda.oliveira@example.com",
                    "_birthday": "1995-04-10T00:00:00.000Z",
                    "_weight": 60,
                    "_height": 167,
                    "_password": "$2b$10$m/cy8hBHIJE/JjOrqF4xaurW8SapGBtioVlpKtXxCKOJE4mN94pRm",
                    "_workoutsFrequency": "5 vezes por semana",
                    "_goals": "Definir músculos e manter energia",
                    "_foodRestrictions": "Lactose, nozes",
                    "_foodPreferences": "Vegetariana, prefere pratos quentes no almoço"
                }
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
