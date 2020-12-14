import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot(
      'mongodb://localhost/nestjs_db' /* , {
      connectionName: 'books',
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-autopopulate'));
        return connection;
      },
    } */,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
