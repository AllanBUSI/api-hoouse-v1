import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ad } from "./Ad";
import { FavoryHistory } from "./FavoryHistory";
import { SearchHistory } from "./SearchHistory";
import { PostalAddress } from "./PostalAddress";
import { Newsletter } from "./Newsletter";
import { AdresseUser } from "./AdresseUser";
import { Meeting } from "./Meeting";
import { Corporate } from "./Corporate";
import { EmployerCorporate } from "./EmployerCorporate";
import { Contact } from "./Contact";
/* A column in the database. */
import { createReference } from "@tools/functions";
import { Prospect } from "./Prospect";
import { SectionCorporate } from "./SectionCorporate";

@Index("email", ["email"], { unique: true })
@Index("phone", ["phone"], {})
@Index("FK_id_user_postal", ["idPostalAddress"], {})
@Entity("user", { schema: "api_homeslash" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id_user" })
  idUser: number;

  @Column("varchar", { name: "lastname", length: 255 })
  lastname: string;

  @Column("varchar", { name: "firstname", length: 255 })
  firstname: string;

  @Column("longtext", { name: "token", nullable: true })
  token: string | null;

  @Column("varchar", { name: "refresh_token", nullable: true })
  refreshToken: string | null;

  @Column("int", { name: "attempt", nullable: true, default: () => "'0'" })
  attempt: number | null;

  @Column("datetime", { name: "last_login", nullable: true })
  lastLogin: Date | null;

  @Column("timestamp", {
    name: "date_update",
    default: () => "CURRENT_TIMESTAMP",
  })
  dateUpdate: Date;

  @Column("timestamp", {
    name: "date_create",
    default: () => "CURRENT_TIMESTAMP",
  })
  dateCreate: Date;

  @Column("enum", {
    name: "civility",
    enum: ["Monsieur", "Madame"],
    default: () => "'Monsieur'",
  })
  civility: "Monsieur" | "Madame";

  @Column("varchar", { name: "email", unique: true, length: 255 })
  email: string;

  @Column("varchar", { name: "phone", length: 10 })
  phone: string | null;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "role", length: 255 })
  role: string;

  // #############################################################
  // Profil investisseur
  // #############################################################

  // myproject
  @Column("varchar", { name: "type_transaction", length: 255 })
  typeTransaction: string | null;

  // revenue

  @Column("int", { name: "revenue_month" })
  revenueMonth: number;

  @Column("int", { name: "aide_month" })
  aideMonth: number;

  @Column("int", { name: "pension_month" })
  pensionMonth: number;

  @Column("int", { name: "autres_revenue_month" })
  autresRevenueMonth: number;

  // depense

  @Column("int", { name: "depense_month" })
  depenseMonth: number | null;

  @Column("int", { name: "montant_credit" })
  montantCredit: number | null;

  @Column("int", { name: "depense_pension" })
  depensePension: number | null;

  @Column("int", { name: "autres_depense_month" })
  autresDepenseMonth: number;

  // pro

  @Column("varchar", { name: "type_contrat_travail", length: 255 })
  typeContrat: string | null;

  @Column("int", { name: "apport" })
  apport: number | null;

  // foyer

  @Column("int", { name: "taille_foyer" })
  tailleFoyer: number | null;

  @Column("int", { name: "nombre_enfant" })
  enfant: number | null;

  @Column("int", { name: "nombre_animaux" })
  animaux: number | null;

  @Column("varchar", { name: "patrimonial", length: 255 })
  patrimonial: string | null;

  @Column("varchar", { name: "date_naissance" })
  dateNaissance: string | null;

  @Column("varchar", { name: "home_actual" })
  homeActual: string | null;

  // fianncial

  @Column("int", { name: "budget" })
  budget: number | null;

  @Column("int", { name: "budget_travaux" })
  budgetTravaux: number | null;

  @Column("varchar", { name: "ville" })
  ville: string | null;

  @Column("varchar", { name: "type_investissement" })
  typeInvestissement: string | null;

  @Column("varchar", { name: "type_home" })
  typeHome: string | null;

  @Column("tinyint", { name: "one_achat" })
  oneAchat: boolean | null;

  @Column("tinyint", { name: "primo_accedant" })
  primoAccedant: boolean | null;

  @Column("varchar", { name: "is_important" })
  isImportant: string | null;

  @Column("varchar", { name: "devises", length: 255 })
  devises: string | null;

  @Column("longtext", { name: "description" })
  description: string;

  // #############################################################
  // Fin profil investisseur
  // #############################################################

  @Column("tinyint", { name: "active", default: () => "'1'" })
  active: number | null;

  @Column("int", { name: "id_postal_address" })
  idPostalAddress: number | null;

  @Column("varchar", { name: "id_random", length: 40 })
  idRandom: string | null;

  @OneToMany(() => Ad, ad => ad.user)
  ads: Ad[];

  @OneToMany(() => Corporate, corporate => corporate.user)
  corporate: Corporate[] | null;

  @OneToMany(() => FavoryHistory, favoryHistory => favoryHistory.user)
  favoryHistories: FavoryHistory[];

  @OneToMany(() => SearchHistory, searchHistory => searchHistory.user)
  searchHistories: SearchHistory[];

  @OneToOne(() => EmployerCorporate, employerCorporate => employerCorporate.user, { cascade: true })
  employerCorporate: EmployerCorporate;

  @ManyToOne(() => PostalAddress, postalAddress => postalAddress.users, {
    cascade: true,
    eager: true,
  })
  @JoinColumn([{ name: "id_postal_address", referencedColumnName: "idPostalAddress" }])
  postalAddress: PostalAddress | null;

  @OneToMany(() => Meeting, meeting => meeting.user, { cascade: true })
  meeting: Meeting[];

  @OneToMany(() => AdresseUser, adresseUser => adresseUser.user)
  adresseUser: AdresseUser[];

  @OneToMany(() => Prospect, prospect => prospect.userAgence)
  userAgence: Prospect[];

  @OneToMany(() => Prospect, prospect => prospect.userProspect)
  userProspect: Prospect[];

  @OneToMany(() => Newsletter, newsletter => newsletter.user, { cascade: true })
  newsletters: Newsletter[];

  @OneToMany(() => Contact, contact => contact.user)
  contact: Contact[];

  @BeforeInsert()
  beforeInsert(): void {
    this.dateCreate = new Date();
    this.dateUpdate = new Date();
    // suppression des virgules
    this.firstname = this.firstname.replace(/,/g, "");
    this.lastname = this.lastname.replace(/,/g, "");
  }

  @BeforeUpdate()
  beforeUpdate(): void {
    this.dateUpdate = new Date();
    // suppression des virgules
    // this.firstname = this.firstname.replace(/,/g, "");
    // this.lastname = this.lastname.replace(/,/g, "");
  }
}
