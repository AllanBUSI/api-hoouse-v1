import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("fk_user", ["idUser"], {})
@Index("city", ["city"], {})
@Index("type", ["type"], {})
@Index("max_price", ["maxPrice"], {})
@Entity("search_history", { schema: "api_homeslash" })
export class SearchHistory {
  @PrimaryGeneratedColumn({ type: "int", name: "id_search_history" })
  idSearchHistory: number;

  @Column("timestamp", {
    name: "date_create",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dateCreate: Date | null;

  @Column("varchar", { name: "city", nullable: true, length: 255 })
  city: string | null;

  @Column("varchar", {name: "type",length: 255})
  type: string | null;

  @Column("int", { name: "max_price", nullable: true })
  maxPrice: number | null;

  @Column("float", { name: "area", nullable: true, precision: 12 })
  area: number | null;

  @Column("int", {
    name: "room",
    nullable: true,
  })
  room: number | null;

  @Column("int", {
    name: "bedroom",
    nullable: true,
  })
  bedroom: number | null;

  @Column("int", { name: "id_user", nullable: true })
  idUser: number | null;

  @ManyToOne(() => User, (user) => user.searchHistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
  user: User;

  @BeforeInsert()
  beforeInsert(): void {
    this.dateCreate = new Date();
  }
}
