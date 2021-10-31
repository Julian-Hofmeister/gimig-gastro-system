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

  message: string;

  isReserved: boolean;
  reservationTimestamp: number;
}
