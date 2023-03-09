//Here we have write our TypeORM code
import { IsDate, IsNumber, IsString } from "class-validator";
import { BaseEntity, Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_user', { database: process.env.USER_DB })
export default class UsersTable extends BaseEntity{

  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  userUniqueKey: string;

  @IsString()
  @Column()
  userName: String;

  @IsNumber()
  @Column({ type: "datetime", default: () => new Date() })
  dateOfBirth: Date;

  @IsString()
  @Column()
  gender: String;

  @IsString()
  @Column()
  primaryMobileNumber: String;

  @IsString()
  @Column()
  secondaryMobileNumber: String;

  @IsString()
  @Column()
  deliveryAddressOne: String;

  @IsString()
  @Column()
  deliveryAddressTwo: String;


  @IsString()
  @Column()
  email: String;

  @IsString()
  @Column()
  password: String;

  @IsNumber()
  @Column({ type: "datetime", default: () => new Date() })
  createdAt: Date;

  @IsDate()
  @Column({ type: "datetime", default: null })
  updatedAt: Date;

  @IsDate()
  @Column({ type: "datetime", default: null })
  deletedAt: Date;

}

