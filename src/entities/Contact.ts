import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  Index,
  ManyToOne,
} from "typeorm";
import { Ad } from "./Ad";
import { User } from "./User";

@Index("id_ad", ["idAd"], {})
@Entity("contact", { schema: "api_homeslash" })
export class Contact {
  @PrimaryGeneratedColumn({ type: "int", name: "id_contact" })
  idContact: number;

  @Column("varchar", { name: "firstname" })
  firstname: string;

  @Column("int", { name: "email" })
  email: string;


  @Column("varchar", { name: "phone" })
  phone: string;

  @Column("longtext", { name: "message" })
  message: string;

  @Column("int", { name: "id_ad" })
  idAd: number;

  @ManyToOne(() => Ad, (ad) => ad.idAd, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_ad", referencedColumnName: "idAd" }])
  ad: Ad;

  @ManyToOne(() => User, (user) => user.idUser, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
  user: User | null;

  @Column("timestamp", {
    name: "update_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updateAt: Date | null;

  @Column("timestamp", {
    name: "create_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createAt: Date | null;
}