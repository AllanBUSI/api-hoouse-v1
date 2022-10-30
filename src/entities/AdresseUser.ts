import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("id_adresse_user", ["idAdresseUser"], {})
@Entity("adresse_user", { schema: "api_homeslash" })
export class AdresseUser {
  @PrimaryGeneratedColumn({ type: "int", name: "id_adresse_user" })
  idAdresseUser: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "city", length: 255 })
  city: string;

  @Column("varchar", { name: "number_street", length: 255 })
  number_street: string;

  @Column("varchar", { name: "street", length: 255 })
  street: string;

  @Column("varchar", { name: "longitude", length: 255 })
  longitude: number;

  @Column("varchar", { name: "latitude", length: 255 })
  latitude: number;

  @Column("int", { name: "id_user", nullable: true })
  idUser: number | null;

  @ManyToOne(() => User, (user) => user.adresseUser, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
  user: User;
}
