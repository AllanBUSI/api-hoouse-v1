import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ad } from "./Ad";
import { User } from "./User";

@Index("FK_favory_history_ad", ["idAd"], {})
@Index("FK_favory_history_user", ["idUser"], {})
@Entity("favory_history", { schema: "api_homeslash" })
export class FavoryHistory {
  @PrimaryGeneratedColumn({ type: "int", name: "id_favory_history" })
  idFavoryHistory: number;

  @Column("timestamp", {
    name: "date_create",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dateCreate: Date | null;

  @Column("int", { name: "id_ad", nullable: true })
  idAd: number | null;

  @Column("int", { name: "id_user" })
  idUser: number;

  @ManyToOne(() => Ad, (ad) => ad.favoryHistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
    eager: true,
  })
  @JoinColumn([{ name: "id_ad", referencedColumnName: "idAd" }])
  ad: Ad;

  @ManyToOne(() => User, (user) => user.favoryHistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
  user: User;

  @BeforeInsert()
  beforeInsert(): void {
    this.dateCreate = new Date();
  }
}
