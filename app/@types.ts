export type NewInvoice = {
    clientName: string;
    creationDate: Date;
    reference: string;
    amount: number;
}

export type Invoice = NewInvoice &{
    uuid: string;
    status: string; // TODO: Change type to 'PAID' | 'UNPAID'
}

export type Transactions = {
    uuid: string;
    date: Date;
    description: string;
    reference: string;
    amount: number;
}
