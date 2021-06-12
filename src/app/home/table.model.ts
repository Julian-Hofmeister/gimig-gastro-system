import { Observable } from 'rxjs';

export class Table {
  constructor(
    public tableNumber: string,
    public orderRequest: boolean,
    public payRequest: boolean,
    public serviceRequest: boolean,

    public orderTime: Date,
    public serviceTimestamp: number,
    public payRequestTimestamp: number,
    public status: string,

    public ableToPay: boolean,
    public paysTogether: boolean,
    public paysCache: boolean,

    public isServed: boolean,
    public isPaid: boolean,

    public resetRequest: boolean,

    public id: string
  ) {}
}
