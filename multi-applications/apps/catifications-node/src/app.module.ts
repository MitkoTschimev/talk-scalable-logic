import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CorsMiddleware } from '@nest-middlewares/cors';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // IMPORTANT! Call Middleware.configure BEFORE using it for routes
    CorsMiddleware.configure({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204
    });
    consumer.apply(CorsMiddleware).forRoutes('cats', 'todos', 'todos/:id');
  }
}
