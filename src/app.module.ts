import { Module } from '@nestjs/common';
import { ExpressionModule } from './expression/expression.module';

@Module({
  imports: [ExpressionModule]
})
export class AppModule {}
