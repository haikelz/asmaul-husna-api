import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app
    .listen(5000)
    .then(() => {
      console.log("Success! Running in port 5000");
    })
    .catch((err) => {
      console.error(err);
    });
}

bootstrap();
