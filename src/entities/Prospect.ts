import {
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  Index,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { User } from "./User";

@Entity("prospect", { schema: "api_homeslash" })
export class Prospect {
  @PrimaryGeneratedColumn({ type: "int", name: "id_prospect" })
  idProspect: number;

  @ManyToOne(() => User, (user) => user.idUser)
  @JoinColumn([{ name: "user_agence", referencedColumnName: "idUser" }])
  userAgence: User;

  @ManyToOne(() => User, (user) => user.idUser)
  @JoinColumn([{ name: "user_prospect", referencedColumnName: "idUser" }])
  userProspect: User;

}

