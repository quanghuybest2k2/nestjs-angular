import { Column, Entity, Unique } from 'typeorm';

import { BaseSoftDelete } from '../base';

@Entity()
@Unique(['email'])
export class User extends BaseSoftDelete {
  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  public username?: string;

  @Column()
  public email: string;

  @Column({ nullable: true, default: null })
  public password_hash: string;
}
