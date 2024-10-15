import { IsString } from 'class-validator';

export class EvaluateExpressionDto {
  @IsString()
  expression: string;
}
