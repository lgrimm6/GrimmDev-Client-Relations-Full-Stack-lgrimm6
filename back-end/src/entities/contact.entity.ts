import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Client } from "./client.entity";

@Entity("contact")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne((type) => Client, (client) => client.contact, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  client: Client;
}
