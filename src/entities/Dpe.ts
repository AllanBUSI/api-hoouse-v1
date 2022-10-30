import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  Index,
} from "typeorm";
import { Ad } from "./Ad";

@Index("id_ad", ["idAd"], {})
@Entity("dpe", { schema: "api_homeslash" })
export class Dpe {
  @PrimaryGeneratedColumn({ type: "int", name: "id_dpe" })
  idDpe: number;

  @Column("enum", {
    name: "category",
    enum: ["A", "B", "C", "D", "E", "F", "G", null],
  })
  category: "A" | "B" | "C" | "D" | "E" | "F" | "G" | null;

  @Column("int", { name: "energy" })
  energy: number | null;

  @Column("int", { name: "ges" })
  ges: number | null;

  @Column("enum", {
    name: "category_ges",
    enum: ["A", "B", "C", "D", "E", "F", "G", null],
  })
  categoryGes: "A" | "B" | "C" | "D" | "E" | "F" | "G" | null;

  @Column("int", { name: "id_ad" })
  idAd: number;

  @OneToOne(() => Ad, (ad) => ad.dpe)
  @JoinColumn([{ name: "id_ad", referencedColumnName: "idAd" }])
  ad: Ad;
}
