import { Entity, Column, BeforeInsert } from "typeorm";
import { nanoid } from "nanoid";

@Entity("users", { schema: "public" })
export class User {
  @Column({ primary: true })
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  generateId() {
    this.id = nanoid();
  }
}
