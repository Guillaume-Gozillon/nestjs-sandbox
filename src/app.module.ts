import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExampleController } from "./example/example.controller";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [DatabaseModule],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([DatabaseModule]),
  ],
  controllers: [AppController, ExampleController],
  providers: [AppService],
})
export class AppModule {}
