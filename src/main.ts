import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { cors: true },
  );

  try {
    await app.listen(5000, "0.0.0.0");
    console.log("Success! Running in port 5000");
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
