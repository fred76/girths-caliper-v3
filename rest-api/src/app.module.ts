
import { TestDB } from './testdb';
import { AuthModule } from './features/auth/auth.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true // no need to import into other modules
    }),
    AuthModule,

  ],
  controllers: [],
  providers: [ AppService, TestDB],
  exports: []
})
export class AppModule {}
