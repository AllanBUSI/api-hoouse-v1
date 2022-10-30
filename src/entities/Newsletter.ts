import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "@entities/User";

@Index("id_user", ["idUser"], {})
@Entity("newsletter", { schema: "api_homeslash" })
export class Newsletter {
  @PrimaryGeneratedColumn({ type: "int", name: "id_newsletter" })
  idNewsletter: number;

  @Column("varchar", { name: "newsletter_name", length: 255 })
  newsletterName: string;

  @Column("int", { name: "id_user" })
  idUser: number;

  @ManyToOne(() => User, (user) => user.newsletters)
  @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
  user: User;
}
