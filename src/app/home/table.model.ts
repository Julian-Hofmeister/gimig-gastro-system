// export class Table {
//   constructor(
//     public tableNumber: string,
//     public orderRequest: boolean,
//     public payRequest: boolean,
//     public serviceRequest: boolean,

//     public orderTime: Date,
//     public serviceTimestamp: number,
//     public payRequestTimestamp: number,
//     public status: string,

//     public ableToPay: boolean,
//     public paysTogether: boolean,
//     public paysCache: boolean,

//     public isServed: boolean,
//     public isPaid: boolean,

//     public resetRequest: boolean,

//     public id: string
//   ) {}
// }

export interface Table {
  tableNumber: string;
  orderRequest: boolean;
  payRequest: boolean;
  serviceRequest: boolean;

  orderTime: Date;
  serviceTimestamp: number;
  payRequestTimestamp: number;
  status: string;

  ableToPay: boolean;
  paysTogether: boolean;
  paysCache: boolean;

  isServed: boolean;
  isPaid: boolean;

  resetRequest: boolean;

  id: string;
}
