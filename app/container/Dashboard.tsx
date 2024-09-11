import { useState, useEffect } from "react";
import InvoicesWidget from "~/components/InvoicesWidget";
import SummaryWidget from "~/components/SummaryWidget";
import useInvoices from "~/hooks/useInvoices";
import useSummaryData from "~/hooks/useSummaryData";
import { getInvoiceStatus } from "~/utils";

const mockSummary = {
    // ...,
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

const mockInvoices = [
    {
        clientName: 'John Doe',
        creatingDate: new Date('2/1/2022'),
        uuid: '455634',
        reference: '1234',
        amount: 9000,
        status: 'UNPAID'
    },
    {
        clientName: 'Jane Doedddd',
        creatingDate: new Date('2/1/2021'),
        uuid: '855634',
        reference: '2224',
        amount: 4500,
        status: 'UNPAID'
    },
];

export default function Dashboard({}) {
    const [summaryData, setSummaryData] = useState(mockSummary);
    // const summaryData = useSummaryData();
    const [invoicesData, setInvoicesData] = useState(mockInvoices);
    // const invoicesData = useInvoices({ summaryData });

    // const {
    //     isLoading,
    //     error,
    //     data,
    // } = useInvoices();

    const threshold = 5;

    useEffect(() => {
        if (invoicesData) {
            const cloneInvoicesData = [...invoicesData];
            for (let i = 0; i < invoicesData.length; i += 1) {
                for (let j = 0; j < summaryData.transactions.length; j += 1) {
                    const status = getInvoiceStatus({
                        invoiceAmount: invoicesData[i].amount,
                        transactionAmount: summaryData.transactions[j].amount,
                        invoiceReference: invoicesData[i].reference,
                        transactionReference: summaryData.transactions[j].reference,
                        invoiceDate: invoicesData[i].creatingDate,
                        transactionDate: summaryData.transactions[j].date
                    });
                    if (status === 'PAID') {
                        cloneInvoicesData[i].status = 'PAID';
                        break ;
                    }
                }
            }
            setInvoicesData(cloneInvoicesData);
        }
    }, [summaryData, invoicesData]);


    // TODO: Implement functions
    const handleNewInvoice = () => {

    };

    const handleEditInvoice = () => {

    }


    
    return (
        <div>
            <h1>Dashboard</h1>
            <h3>Summary</h3>
            <SummaryWidget 
                {...mockSummary}
                threshold={threshold}
            />
            <br />
            <hr />
            <h3>Invoices</h3>
            {/* {error && <p>{error.message}</p>}
            {isLoading ? <p>Loading...</p> : ( */}
                <InvoicesWidget 
                    invoices={invoicesData}
                    onEditInvoice={handleEditInvoice}
                />
            {/* )} */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleNewInvoice}>
                Create new invoice
            </button>
        </div>
    );
}