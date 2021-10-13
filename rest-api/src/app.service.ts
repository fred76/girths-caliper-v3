import { TestDB } from './testdb';
import { User } from './features/user/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private testDB: TestDB) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.testDB.findOne(username);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
