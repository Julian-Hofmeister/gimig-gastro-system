import { Observable } from 'rxjs';

export class Table {
  constructor(
    public tableNumber: string,
    public orderRequest: boolean,
    public payRequest: boolean,
    public serviceRequest: boolean,

    public orderTime: Date,
    public status: string,

    public ableToPay: boolean,
    public paysTogehter: boolean,
    public paysCache: boolean,

    public isServed: boolean,
    public isPaid: boolean,

    public resetRequest: boolean,

    public id: string
  ) {}
}
