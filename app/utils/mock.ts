function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomTransactionsCount = getRandomInt(5, 25);
const randomInvoicesCount = getRandomInt(5, 25);

const mockTransactions = Array.from({ length: randomTransactionsCount }, (_, i) => ({
    uuid: '1234', // TODO: Generate UUID
    date: new Date(2024, 0, i + 1),
    description: 'Description of summary',
    reference: `${i + 1}`,
    amount: Math.floor(100 * (i * 100)),
}));

const mockInvoices = Array.from({ length: randomInvoicesCount }, (_, i) => ({
    uuid: '1234', // TODO: Generate UUID
    clientName: 'John Doe',
    creationDate: new Date(2024, 0, i + 1),
    description: 'Description of summary',
    reference: `${i + 1}`,
    amount: Math.floor(100 * (i * 100)),
    status: 'PAID',
}));

export const mockRequestSummary = () => ({ transactions: mockTransactions });
export const mockRequestInvoice = () => ([ ...mockInvoices ]);
