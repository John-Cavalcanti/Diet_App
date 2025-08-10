import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.PORT ?? 3000;
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://nutreai.vercel.app/'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - Nutre.AI')
    .setDescription(
      'Serviço backend da Nutre Aí responsável pela autenticação via JWT, gerenciamento de usuários e endpoints voltados ao acompanhamento nutricional e hábitos de saúde.'
    )
    .setVersion('1.0')
    .addTag('Auth')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document); // é necessário acessar o endereço localhost:port/api/swagger

  await app.listen(port);

  console.log('\nServer is running on port: http://localhost:' + port + '/api');
}
bootstrap();
