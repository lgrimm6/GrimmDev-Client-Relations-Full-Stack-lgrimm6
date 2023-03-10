import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Contact } from "./contact.entity";

@Entity("client")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ unique: true })
  phone: string;

  @OneToMany((type) => Contact, (contact) => contact.client, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  contact: Contact[];
  @CreateDateColumn()
  createdAt: Date;
}
