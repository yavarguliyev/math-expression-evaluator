import { Body, Controller, Post } from '@nestjs/common';
import { ExpressionService } from './expression.service';
import { EvaluateExpressionDto } from './dto/evaluate-expression.dto';

@Controller('evaluate')
export class ExpressionController {
  constructor (private readonly expressionService: ExpressionService) {}

  @Post()
  evaluate(@Body() evaluateExpressionDto: EvaluateExpressionDto): any {
    try {
      const result = this.expressionService.evaluateExpression(evaluateExpressionDto);

      return { result };
    } catch (error) {
      return { error: 'Invalid expression' };
    }
  }
}
