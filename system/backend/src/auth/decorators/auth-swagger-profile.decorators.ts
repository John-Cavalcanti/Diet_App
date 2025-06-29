/* eslint-disable prettier/prettier */
import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiOkResponse, ApiUnauthorizedResponse } from "@nestjs/swagger";

export function AuthSwaggerDocsProfile() {
    return applyDecorators(
        ApiOperation({
            summary: 'Se utiliza do token gerado no login. Extrai o token do header da requisição, valida o token e retorna o payload do usuário caso o token seja válido.',
        }),
        
        ApiOkResponse({
            description: 'Cliente fez a requisão com um token válido no Header.',
            schema: {
                example: {                    
                    "sub": 1,
                    "email": "fernanda.oliveira@example.com",
                    "iat": 1751212858,
                    "exp": 1751216458
                }
            }
        }),

        ApiUnauthorizedResponse({
            description: 'Cliente fez a requisição com um token inválido, expirado ou sem token na Header.',
            schema: {
                example: {
                    "message": "Unauthorized",
	                "statusCode": 401
                }
            }
        }),
    );
}