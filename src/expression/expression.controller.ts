import { Controller, Post } from '@nestjs/common';

@Controller('evaluate')
export class ExpressionController {
  constructor () {}

  @Post()
  evaluate(): any {
    return {};
  }
}
