import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";

async function bootstrap() {
  /**
   * @see https://docs.nestjs.com/techniques/performance
   */
  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );

    app.enableCors({ origin: "*" });

    const swaggerConfig = new DocumentBuilder()
      .setTitle("asmaul-husna-api")
      .setDescription(
        "asmaul-husna-api is an API to get the list of Asma'ul Husna.",
      )
      .setLicense(
        "MIT",
        "https://github.com/haikelz/asmaul-husna-api/blob/master/LICENSE",
      )
      .build();

    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup("swagger", app, swaggerDocument);

    await app.listen(5000, "0.0.0.0");
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
