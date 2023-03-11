export interface Table {
  ableToPay: boolean;
  id: string;
  isPaid: boolean;
  isReserved: boolean;
  isServed: boolean;
  message: string;
  orderRequest: boolean;
  orderTime: Date;
  payRequest: boolean;
  payRequestTimestamp: number;
  paysCache: boolean;
  paysTogether: boolean;
  resetRequest: boolean;
  reservationTimestamp: number;
  serviceRequest: boolean;
  serviceTimestamp: number;
  status: string;
  tableNumber: string;
}
