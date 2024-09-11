export const getInvoiceStatus = ({ 
    invoiceAmount,
    transactionAmount,
    invoiceReference,
    transactionReference,
    invoiceDate,
    transactionDate,
}: any) => (
    transactionReference === invoiceReference // Access hash-map
    && transactionAmount === invoiceAmount 
    && transactionDate > invoiceDate) ? 'PAID' : 'UNPAID';
