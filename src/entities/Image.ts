import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ad } from "./Ad";

@Index("FK_image_ad", ["idAd"], {})
@Entity("image", { schema: "api_homeslash" })
export class Image {
  @PrimaryGeneratedColumn({ type: "int", name: "id_image" })
  idImage: number;

  @Column("text", { name: "path" })
  path: string;

  @Column("varchar", { name: "alt", nullable: true, length: 45 })
  alt: string | null;

  @Column("timestamp", {
    name: "date_create",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dateCreate: Date | null;

  @Column("timestamp", {
    name: "date_update",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dateUpdate: Date | null;

  @Column("int", { name: "id_ad" })
  idAd: number;

  @ManyToOne(() => Ad, (ad) => ad.images, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_ad", referencedColumnName: "idAd" }])
  ad: Ad;

  @BeforeInsert()
  beforeInsert(): void {
    this.dateCreate = new Date();
    this.dateUpdate = new Date();
  }

  @BeforeUpdate()
  beforeUpdate(): void {
    this.dateUpdate = new Date();
  }
}
