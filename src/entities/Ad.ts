import { BeforeInsert, BeforeUpdate, Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { FavoryHistory } from "./FavoryHistory";
import { Image } from "./Image";
import { PriceHistory } from "./PriceHistory";
import { Dpe } from "@entities/Dpe";
import { TransactionType } from "@tools/types";
import { InfoAd } from "./InfoAd";
import { Meeting } from "./Meeting";
import { ViewAd } from "./ViewAd";
import { Contact } from "./Contact";

@Index("FK_ad_user", ["idUser"], {})
@Index("reference", ["reference"], {})
@Entity("ad", { schema: "api_homeslash" })
export class Ad {
  @PrimaryGeneratedColumn({ type: "int", name: "id_ad" })
  idAd: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("longtext", { name: "description" })
  description: string;

  @Column("varchar", { name: "en_name", length: 255 })
  enName: string;

  @Column("longtext", { name: "en_description" })
  enDescription: string;

  @Column("tinyint", { name: "active", nullable: true, default: () => "'0'" })
  active: number | null;

  @Column("varchar", { name: "price", nullable: true, length: 255 })
  price: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 25 })
  type: string | null;

  @Column("varchar", { name: "transaction_type", nullable: true, length: 25 })
  transactionType: TransactionType;

  @Column("int", { name: "area", nullable: true })
  area: number | null;

  @Column("int", { name: "room", nullable: true })
  room: number | null;

  @Column("int", { name: "bedroom", nullable: true })
  bedroom: number | null;

  @Column("varchar", { name: "number_address", nullable: true, length: 255 })
  numberAddress: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("varchar", { name: "postal_code", nullable: true, length: 255 })
  postalCode: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 255 })
  city: string | null;

  @Column("double", { name: "long", nullable: true, precision: 22 })
  long: number | null;

  @Column("double", { name: "lat", nullable: true, precision: 22 })
  lat: number | null;

  @Column("varchar", { name: "reference", nullable: true, length: 50 })
  reference: string | null;

  @Column("timestamp", {
    name: "date_update",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dateUpdate: Date | null;

  @Column("timestamp", {
    name: "date_create",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dateCreate: Date | null;

  @Column("int", { name: "id_user" })
  idUser: number;

  @Column("tinyint", { name: "delete", default: () => "'0'" })
  delete: boolean | number;

  @Column("int", { name: "product_notation" })
  productNotation: number;

  @Column("int", { name: "parking" })
  parking: number;

  @Column("int", { name: "salle_bain" })
  salleBain: number;

  @Column("int", { name: "etage" })
  etage: number;

  @Column("int", { name: "terrain" })
  terrain: number;

  @Column("int", { name: "location" })
  location: number;

  @Column("int", { name: "prix_travaux" })
  prixTravaux: number;

  @Column("varchar", { name: "firstname" })
  firstname: string;

  @Column("varchar", { name: "lastname" })
  lastname: string;

  @Column("varchar", { name: "email" })
  email: string;

  @Column("varchar", { name: "phone" })
  phone: string;

  @Column("int", { name: "copro" })
  copro: number;

  @ManyToOne(() => User, user => user.ads, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
  user: User;

  @OneToOne(() => Dpe, dpe => dpe.ad, { cascade: true })
  dpe: Dpe;

  @OneToMany(() => Meeting, meeting => meeting.ad, { cascade: true })
  meeting: Meeting[];

  @OneToMany(() => FavoryHistory, favoryHistory => favoryHistory.ad)
  favoryHistories: FavoryHistory[];

  @OneToMany(() => Contact, contact => contact.ad)
  contact: Contact[];

  @OneToMany(() => Image, image => image.ad, { cascade: true, eager: true })
  images: Image[];

  @OneToMany(() => ViewAd, viewAd => viewAd.ad, {
    cascade: true,
    eager: true,
  })
  viewAd: ViewAd[];

  @OneToMany(() => PriceHistory, priceHistory => priceHistory.ad)
  priceHistories: PriceHistory[];

  @OneToMany(() => InfoAd, infoAd => infoAd.ad, { cascade: true })
  @JoinColumn([{ name: "id_info_ad", referencedColumnName: "idInfoAd" }])
  infoAd: InfoAd[];

  @BeforeInsert()
  beforeInsert(): void {
    this.dateCreate = new Date();
    this.dateUpdate = new Date();
    this.productNotation = this.user.role === "USER" ? 50 : 100;
  }

  @BeforeUpdate()
  beforeUpdate(): void {
    this.dateUpdate = new Date();
  }
}
