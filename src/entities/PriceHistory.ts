import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ad } from "./Ad";

@Entity("price_history", { schema: "api_homeslash" })
export class PriceHistory {
  @PrimaryGeneratedColumn({ type: "int", name: "id_price_history" })
  idPriceHistory: number;

  @Column("int", { name: "price", nullable: true })
  price: number | null;

  @Column("timestamp", {
    name: "date_create",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dateCreate: Date | null;

  @ManyToOne(() => Ad, (ad) => ad.priceHistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_ad", referencedColumnName: "idAd" }])
  ad: Ad;
}
