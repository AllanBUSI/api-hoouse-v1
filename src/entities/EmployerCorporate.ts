import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  Index,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { Ad } from "./Ad";
import { Corporate } from "./Corporate";
import { User } from "./User";
import { SectionCorporate } from './SectionCorporate';

@Entity("employer_corporate", { schema: "api_homeslash" })
export class EmployerCorporate {
  @PrimaryGeneratedColumn({ type: "int", name: "id_employer_corporate" })
  idEmployerCorporate: number;

  @ManyToOne(() => SectionCorporate, (sectionCorporate) => sectionCorporate.employerCorporate, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_section_corporate", referencedColumnName: "idSectionCorporate" }])
  sectionCorporate: SectionCorporate;

  @OneToOne(() => User, (user) => user.employerCorporate, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
  user: User;

  @Column("varchar", { name: "siret", length: 45 })
  siret: string;

  @Column("varchar", { name: "role", length: 45 })
  role: string;
}
