import { tableColumn, userTable } from '../managment/models/table';

export const userData: userTable[] = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30,
    occupation: 'Software Engineer',
    civilStatus: 'Single',
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    age: 35,
    occupation: 'Data Analyst',
    civilStatus: 'Married',
  },
  {
    name: 'Alice Johnson',
    email: 'alicejohnson@example.com',
    age: 25,
    occupation: 'Web Developer',
    civilStatus: 'Single',
  },
  {
    name: 'Bob Williams',
    email: 'bobwilliams@example.com',
    age: 40,
    occupation: 'Project Manager',
    civilStatus: 'Married',
  },
  {
    name: 'Sarah Davis',
    email: 'sarahdavis@example.com',
    age: 28,
    occupation: 'UI Designer',
    civilStatus: 'Single',
  },
  {
    name: 'Michael Brown',
    email: 'michaelbrown@example.com',
    age: 45,
    occupation: 'Senior Developer',
    civilStatus: 'Married',
  },
  {
    name: 'Emily Wilson',
    email: 'emilywilson@example.com',
    age: 32,
    occupation: 'Data Scientist',
    civilStatus: 'Single',
  },
  // Add more objects as needed
];

export const productData = [
  {
    name: 'Product 1',
    price: 10.99,
    stock: 50,
    discount: 0.2,
    shortDescription: 'This is product 1',
  },
  {
    name: 'Product 2',
    price: 19.99,
    stock: 100,
    discount: 0.1,
    shortDescription: 'This is product 2',
  },
  {
    name: 'Product 3',
    price: 5.99,
    stock: 20,
    discount: 0,
    shortDescription: 'This is product 3',
  },
  {
    name: 'Product 4',
    price: 14.99,
    stock: 75,
    discount: 0.15,
    shortDescription: 'This is product 4',
  },
  {
    name: 'Product 5',
    price: 9.99,
    stock: 30,
    discount: 0.05,
    shortDescription: 'This is product 5',
  },
  {
    name: 'Product 6',
    price: 24.99,
    stock: 10,
    discount: 0.3,
    shortDescription: 'This is product 6',
  },
  {
    name: 'Product 7',
    price: 7.99,
    stock: 60,
    discount: 0.1,
    shortDescription: 'This is product 7',
  },
  {
    name: 'Product 8',
    price: 12.99,
    stock: 25,
    discount: 0.2,
    shortDescription: 'This is product 8',
  },
  {
    name: 'Product 9',
    price: 17.99,
    stock: 15,
    discount: 0.05,
    shortDescription: 'This is product 9',
  },
  {
    name: 'Product 10',
    price: 29.99,
    stock: 5,
    discount: 0.25,
    shortDescription: 'This is product 10',
  },
];

export const orderData = [
  {
    orderId: '1',
    customerName: 'John Doe',
    productName: 'Product 1',
    quantity: 2,
    totalPrice: 21.98,
  },
  {
    orderId: '2',
    customerName: 'Jane Smith',
    productName: 'Product 3',
    quantity: 1,
    totalPrice: 5.99,
  },
  {
    orderId: '3',
    customerName: 'Alice Johnson',
    productName: 'Product 2',
    quantity: 3,
    totalPrice: 56.97,
  },
  {
    orderId: '4',
    customerName: 'Bob Williams',
    productName: 'Product 5',
    quantity: 2,
    totalPrice: 19.98,
  },
  {
    orderId: '5',
    customerName: 'Sarah Davis',
    productName: 'Product 4',
    quantity: 1,
    totalPrice: 11.24,
  },
  {
    orderId: '6',
    customerName: 'Michael Brown',
    productName: 'Product 7',
    quantity: 4,
    totalPrice: 31.96,
  },
  {
    orderId: '7',
    customerName: 'Emily Wilson',
    productName: 'Product 6',
    quantity: 2,
    totalPrice: 49.98,
  },
  {
    orderId: '8',
    customerName: 'John Doe',
    productName: 'Product 9',
    quantity: 1,
    totalPrice: 17.99,
  },
  {
    orderId: '9',
    customerName: 'Jane Smith',
    productName: 'Product 8',
    quantity: 3,
    totalPrice: 38.97,
  },
  {
    orderId: '10',
    customerName: 'Alice Johnson',
    productName: 'Product 10',
    quantity: 2,
    totalPrice: 59.98,
  },
];

export const userColumnsData: tableColumn[] = [
  { label: 'Name', property: 'name', filter: true, sort: true },
  { label: 'Email', property: 'email', filter: true, sort: true },
  { label: 'Age', property: 'age', filter: true, sort: true },
  { label: 'Occupation', property: 'occupation', filter: false, sort: true },
  { label: 'Civil Status', property: 'civilStatus', filter: true, sort: false },
];

export const productColumnsData: tableColumn[] = [
  { label: 'Name', property: 'name', filter: true, sort: true },
  { label: 'Price', property: 'price', filter: true, sort: true },
  { label: 'Stock', property: 'stock', filter: false, sort: false },
  { label: 'Discount', property: 'discount', filter: true, sort: true },
  {
    label: 'Short Description',
    property: 'shortDescription',
    filter: false,
    sort: true,
  },
];

export const orderColumnsData: tableColumn[] = [
  { label: 'Order ID', property: 'orderId', filter: false, sort: true },
  {
    label: 'Customer Name',
    property: 'customerName',
    filter: true,
    sort: false,
  },
  {
    label: 'Product Name',
    property: 'productName',
    filter: false,
    sort: false,
  },
  { label: 'Quantity', property: 'quantity', filter: true, sort: true },
  { label: 'Total Price', property: 'totalPrice', filter: true, sort: true },
];
