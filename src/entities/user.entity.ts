import { BaseEntity, BeforeInsert, Column, Entity, Index, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import crypto from "node:crypto";

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: number;

  @Index('email_index')
  @Column({ unique: true, type: 'text' })
  email: string;

  @Column('text')
  name: string;

  @Column('text')
  country: string;

  @Column('number')
  age: number;

  // this will not return this value unless explicitly specified
  @Column({ select: false, type: 'text' })
  password: string;

  @Column({ select: false, type: 'text' })
  salt: string;

  @BeforeInsert()
  async hashPassword() {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = crypto.pbkdf2Sync(this.password, this.salt, 1000, 64, 'sha512').toString();
  }
}