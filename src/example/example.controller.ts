import { Controller, Get } from "@nestjs/common";
import { Connection } from "typeorm";

@Controller("example")
export class ExampleController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly connection: Connection) { }

  @Get()
  async checkConnection(): Promise<string> {
    try {
      await this.connection.query("SELECT 1");
      return "Connected to the database";
    } catch (error) {
      return "Failed to connect to the database";
    }
  }
}
