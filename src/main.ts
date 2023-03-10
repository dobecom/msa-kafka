import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'client-seat',
          brokers: ["localhost:3333"],
        },
        consumer: {
          groupId: "consumer",
        },
      },
    }
  );
  app.listen();
}
bootstrap();
