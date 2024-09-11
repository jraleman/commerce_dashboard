import { render } from "@testing-library/react";
import SummaryWidget from "./SummaryWidget";


describe('SummaryWidget', () => {
    it('should render correctly', () => {
        const mockSummary = {
            transactions: [
                {
                    date: new Date('1/1/2023'),
                    description: 'Description of summary',
                    uuid: '1234',
                    reference: '1234',
                    amount: 9000,
                },
                {
                    date: new Date('1/1/2022'),
                    description: 'Description of summary2',
                    uuid: '2134',
                    reference: '2224',
                    amount: 4500,
                },
                {
                    date: new Date('1/1/2024'),
                    description: 'Description of summary3',
                    uuid: '5433',
                    reference: '5544',
                    amount: -100,
                }
            ],
        };
        const summary = render(<SummaryWidget transactions={mockSummary.transactions} threshold={5} />);      
        // expect(summary).toBe(true);

    }); 

    it('compare transaction amount', () => {
        const mockTransaction = {          
            date: new Date('1/1/2023'),
            description: 'Description of summary',
            uuid: '1234',
            reference: '1234',
            amount: 9000,

        };
        const summary = render(<SummaryWidget transactions={[{...mockTransaction, amount: 9000}]} threshold={5} />);      // render(<SummaryWidget transactions={mockSummary.transactions} threshold={5} />);
        const transaction = summary.findByTestId(mockTransaction.uuid);
        expect(transaction.state.amount).toBe(mockTransaction.amount);
    })

    it('checks threshold condition', () => {
        const mockTransaction = {          
            date: new Date('1/1/2023'),
            description: 'Description of summary',
            uuid: '1234',
            reference: '1234',
            amount: 9000,

        };
        const summary = render(<SummaryWidget transactions={[{...mockTransaction, amount: 9000}]} threshold={50000} />); 
        const transaction = summary.findByTestId(mockTransaction.uuid);
        expect(transaction.).toBe(mockTransaction.amount);
    })
})