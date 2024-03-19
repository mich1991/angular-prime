export interface userTable {
  name: string;
  email: string;
  age: number;
  occupation: string;
  civilStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed';
}

export interface productTable {
  name: string;
  price: number;
  stock: number;
  discount: number;
  shortDescription: string;
}

export interface orderTable {
  orderId: string;
  customerName: string;
  productName: string;
  quantity: number;
  totalPrice: number;
}

export interface tableColumn {
  label: string;
  property: string;
  filter: boolean;
  sort: boolean;
}

export type Table = userTable[] | productTable[] | orderTable[];
