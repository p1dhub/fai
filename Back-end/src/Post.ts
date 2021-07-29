import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("post", { schema: "keeplearning" })
export class Post {
  @Column("varchar", { name: "pictureprofile", nullable: true, length: 255 })
  pictureprofile: string | null;

  @Column("varchar", { name: "textpost", nullable: true, length: 200 })
  textpost: string | null;

  @Column("timestamp", { name: "time", nullable: true })
  time: Date | null;

  @Column("varchar", { name: "name", nullable: true, length: 60 })
  name: string | null;

  @Column("varchar", { name: "picturepost", nullable: true, length: 255 })
  picturepost: string | null;

  @PrimaryGeneratedColumn()
  postid: number
}
