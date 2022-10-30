import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  Index,
  ManyToOne,
  BeforeInsert,
} from "typeorm";
import { Ad } from "./Ad";

@Index("id_view_ad", ["idAd"], {})
@Entity("view_ad", { schema: "api_homeslash" })
export class ViewAd {
  @PrimaryGeneratedColumn({ type: "int", name: "id_view_ad" })
  idView: number;

  @Column("timestamp", {
    name: "date_create",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dateCreate: Date | null;

  @Column("int", { name: "id_ad" })
  idAd: number;

  @ManyToOne(() => Ad, (ad) => ad.viewAd, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_ad", referencedColumnName: "idAd" }])
  ad: Ad;

  @BeforeInsert()
  beforeInsert(): void {
    this.dateCreate = new Date();
  }
}
