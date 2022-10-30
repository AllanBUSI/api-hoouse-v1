import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  Index,
  ManyToOne,
} from "typeorm";
import { Ad } from "./Ad";
import { User } from "./User";

@Index("id_ad", ["idAd"], {})
@Entity("meeting", { schema: "api_homeslash" })
export class Meeting {
  @PrimaryGeneratedColumn({ type: "int", name: "id_meeting" })
  idMeeting: number;

  @Column("datetime", {
    name: "date",
    nullable: true,
  })
  date: Date | null;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @ManyToOne(() => User, (user) => user.idUser)
  @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
  user: User;

  @Column("int", { name: "id_user_ad" })
  idUserAd: number;
  
  @OneToOne(() => User, (user) => user.idUser)
  @JoinColumn([{ name: "id_user_ad", referencedColumnName: "idUser" }])
  userAd: User;
  
  @Column("int", { name: "id_ad" })
  idAd: number;

  @ManyToOne(() => Ad, (ad) => ad.dpe)
  @JoinColumn([{ name: "id_ad", referencedColumnName: "idAd" }])
  ad: Ad;
}
