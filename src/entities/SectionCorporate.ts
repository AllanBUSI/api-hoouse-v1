import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  Index,
  ManyToOne,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { Ad } from "./Ad";
import { EmployerCorporate } from "./EmployerCorporate";
import { User } from "./User";
import { Corporate } from './Corporate';

@Entity("section_corporate", { schema: "api_homeslash" })
export class SectionCorporate {
  @PrimaryGeneratedColumn({ type: "int", name: "id_section_corporate" })
  idSectionCorporate: number;
  
  @Column("varchar", { name: "name", unique: true, length: 255 })
  name: string;

  @Column("longtext", { name: "description" })
  description: string;

  @Column("tinyint", { name: "active", nullable: true, default: () => "'0'" })
  active: number | null;

  @Column("varchar", { name: "number_adresse", length: 255 })
  numberAdresse: string | null;

  @Column("varchar", { name: "adresse", length: 255 })
  adresse: string | null;

  @Column("varchar", { name: "city", length: 255 })
  city: string;

  @Column("varchar", { name: "code_postal", length: 255 })
  codePostal: string;

  @Column("double", { name: "longitude", nullable: true, precision: 22 })
  longitude: number | null;

  @Column("double", { name: "latitude", nullable: true, precision: 22 })
  latitude: number | null;

  @Column("varchar", { name: "reference", length: 255 })
  reference: string;

  @Column("varchar", { name: "type", length: 255 })
  type: string;

  @Column("varchar", { name: "image", nullable:true, length: 255 })
  image: string;

  @Column("varchar", { name: "siret", length: 45 })
  siret: string;

  @OneToMany(
    () => EmployerCorporate,
    (employerCorporate) => employerCorporate.sectionCorporate,
    { cascade: true }
  )
  employerCorporate: EmployerCorporate[];

  @ManyToOne(() => Corporate, (corporate) => corporate.sectionCorporate, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_corporate", referencedColumnName: "idCorporate" }])
  corporate: Corporate;
}
