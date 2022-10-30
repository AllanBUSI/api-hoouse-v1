import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ad } from "./Ad";

@Index("FK_info_ad", ["idAd"], {})
@Entity("info_ad", { schema: "api_homeslash" })
export class InfoAd {
  @PrimaryGeneratedColumn({ type: "int", name: "id_info_ad" })
  idInfoAd: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "valeur", length: 255 })
  valeur: string;

  @Column("varchar", { name: "type", length: 255 })
  type: string;

  @Column("int", { name: "id_ad" })
  idAd: number;

  @ManyToOne(() => Ad, (ad) => ad.priceHistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_ad", referencedColumnName: "idAd" }])
  ad: Ad;
}
