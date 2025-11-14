import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGreetings(): string {
      return "Hello from GCP Cloud !";
  }
}
