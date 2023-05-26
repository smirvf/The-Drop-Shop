export interface Order {
    orderId: string;
    productIds: string[];
    customer: Customer;
    datePlaced: Date;
}

interface Customer {
    email: string;
    phone: string;
    fname: string;
    sname: string;
    address1: string;
    address2: string;
    postcode: string;
    city: string;
}