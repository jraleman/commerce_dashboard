import { getRandomInt, randomNegative } from "./helpers";

const randomTransactionsCount = getRandomInt(5, 25);
const randomInvoicesCount = getRandomInt(5, 25);

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const mockTransactions = Array.from({ length: randomTransactionsCount }, (_, i) => ({
    uuid: '1234', // TODO: Generate UUID
    date: new Date(2020 + getRandomInt(1, 2), getRandomInt(5, 7), i + 1),
    reference: `${i + 1}`,
    amount: Math.floor(100 * ((i + 1) * getRandomInt(1, 2))) * randomNegative(),
    description: loremIpsum.slice(0, getRandomInt(50, 150)),
}));

const mockInvoices = Array.from({ length: randomInvoicesCount }, (_, i) => ({
    uuid: '1234', // TODO: Generate UUID
    clientName: 'John Doe',
    creationDate: new Date(2020 + getRandomInt(1, 2), getRandomInt(5, 7), i + 1),
    reference: `${i + 1}`,
    amount: Math.floor(100 * ((i + 1) * getRandomInt(1, 2))) * randomNegative(),
    status: 'UNPAID',
}));

export const mockRequestSummary = () => ({ transactions: mockTransactions });
export const mockRequestInvoice = () => ([ ...mockInvoices ]);
