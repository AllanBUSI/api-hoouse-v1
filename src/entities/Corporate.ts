import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  Index,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Ad } from "./Ad";
import { EmployerCorporate } from "./EmployerCorporate";
import { User } from "./User";
import { SectionCorporate } from './SectionCorporate';

@Entity("corporate", { schema: "api_homeslash" })
export class Corporate {
  @PrimaryGeneratedColumn({ type: "int", name: "id_corporate" })
  idCorporate: number;

  @Column("varchar", { name: "name", unique: true, length: 255 })
  name: string;

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

  @Column("double", { name: "long", nullable: true, precision: 22 })
  long: number | null;

  @Column("double", { name: "lat", nullable: true, precision: 22 })
  lat: number | null;

  @Column("varchar", { name: "reference", length: 255 })
  reference: string;

  @Column("varchar", { name: "type", length: 255 })
  type: string;

  @Column("varchar", { name: "image", length: 255 })
  image: string;

  @Column("varchar", { name: "siret", length: 45 })
  siret: string;

  @Column("longtext", { name: "description" })
  description: string;

  @ManyToOne(() => User, (user) => user.corporate, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
  user: User | null;

  @OneToMany(
    () => SectionCorporate,
    (sectionCorporate) => sectionCorporate.corporate,
    { cascade: true }
  )
  sectionCorporate: SectionCorporate[];

}
