export interface Order {
    name: string;
    price: string;
    category?: string;
    tax: string;
    kitchenRelevant: boolean;
    active: true;
    combinationProduct: false;
    infoText?: string;
    stockChecking: boolean;
    stockAmount?: number;
    order?: number;
    customPrinterAddress: string;
    _id: string;
    identifyForList: string;
    uniqueOrderArticleId: string;
    additionalInfo?: string;
    course: number;
    brangToTable: false;
    discount?: string;
    combinableWith: [];
    combinedWith: [];
}
