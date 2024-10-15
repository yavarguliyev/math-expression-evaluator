import { Injectable } from '@nestjs/common';
import { EvaluateExpressionDto } from './dto/evaluate-expression.dto';

@Injectable()
export class ExpressionService {
  evaluateExpression (evaluateExpressionDto: EvaluateExpressionDto): number {
    const { expression } = evaluateExpressionDto;

    // Allow only numbers, operators, parentheses, and spaces
    if (/[^0-9+\-*/().\s]/.test(expression)) {
      throw new Error('Invalid expression: Expression contains invalid characters');
    }

    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');

    try {
      const result = this.evaluate(sanitizedExpression);

      return result;
    } catch (error) {
      throw new Error('Invalid expression');
    }
  }

  private evaluate (expr: string): number {
    // Recursively evaluate innermost parentheses
    if (expr.includes('(')) {
      const innerMost = /\(([^()]+)\)/g;
      return this.evaluate(expr.replace(innerMost, (_, innerExpr) => this.evaluate(innerExpr).toString()));
    }

    const multiplyDivide = /(-?\d+(\.\d+)?)([*\/])(-?\d+(\.\d+)?)/;
    while (multiplyDivide.test(expr)) {
      expr = expr.replace(multiplyDivide, (_, num1, _2, operator, num2) => {
        return operator === '*'
          ? (parseFloat(num1) * parseFloat(num2)).toString()
          : (parseFloat(num1) / parseFloat(num2)).toString();
      });
    }

    const addSubtract = /(-?\d+(\.\d+)?)([+-])(-?\d+(\.\d+)?)/;
    while (addSubtract.test(expr)) {
      expr = expr.replace(addSubtract, (_, num1, _2, operator, num2) => {
        return operator === '+'
          ? (parseFloat(num1) + parseFloat(num2)).toString()
          : (parseFloat(num1) - parseFloat(num2)).toString();
      });
    }

    return parseFloat(expr);
  }
}
