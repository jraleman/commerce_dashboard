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

export const getMoneyStatusColor = (totalMoney: number, threshold: number) => {
    let totalMoneyColor = 'yellow';
    if (totalMoney > threshold) {
        totalMoneyColor = 'green';
    } else if (totalMoney < 0) {
        totalMoneyColor = 'red';
    }
    return totalMoneyColor;
}

export const formatDate = (d?: Date) => d &&
    `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;

export const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    
export const randomNegative = () => Math.random() < 0.5 ? 1 : -1;
