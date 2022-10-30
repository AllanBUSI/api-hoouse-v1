import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("postal_code", ["postalCode"], {})
@Index("city", ["city"], {})
@Entity("postal_address", { schema: "api_homeslash" })
export class PostalAddress {
  @PrimaryGeneratedColumn({ type: "int", name: "id_postal_address" })
  idPostalAddress: number;

  @Column("varchar", { name: "number_address", length: 50 })
  numberAddress: string;

  @Column("varchar", { name: "address", length: 255 })
  address: string;

  @Column("varchar", { name: "city", length: 255 })
  city: string;

  @Column("varchar", { name: "postal_code", length: 5 })
  postalCode: string;

  @Column("double", { name: "long", nullable: true, precision: 22 })
  long: number | null;

  @Column("double", { name: "lat", nullable: true, precision: 22 })
  lat: number | null;

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

  @OneToMany(() => User, (user) => user.postalAddress, { onDelete: "CASCADE" })
  users: User[];

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
