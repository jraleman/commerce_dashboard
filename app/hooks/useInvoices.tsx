import { useEffect, useState } from "react";
import { Invoice, NewInvoice, Transactions } from "~/@types";
import { mockRequestInvoice } from "~/utils/mock";
import { getInvoiceStatus } from "~/utils/helpers";

export type Props = {
    summaryData?: {
        transactions: Transactions[]
    } | null
}

export default function useInvoices({ summaryData }: Props) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);
    const [data, setData] = useState<Invoice[] | []>([]);
    
    useEffect(() => {
        if (summaryData) {
            setIsLoading(true);
            // TODO: Refactor this with a hash-map (remove second for-loop)
            try {
                const reqData = mockRequestInvoice();
                const cloneInvoicesData = [...reqData];
                for (let i = 0; i < reqData.length; i += 1) {
                    for (let j = 0; j < summaryData.transactions.length; j += 1) {
                        const status = getInvoiceStatus({
                            invoiceAmount: reqData[i].amount,
                            transactionAmount: summaryData.transactions[j].amount,
                            invoiceReference: reqData[i].reference,
                            transactionReference: summaryData.transactions[j].reference,
                            invoiceDate: reqData[i].creationDate,
                            transactionDate: summaryData.transactions[j].date
                        });
                        if (status === 'PAID') {
                            cloneInvoicesData[i].status = 'PAID';
                            break ;
                        }
                    }
                }
                setData(cloneInvoicesData);
            } catch (error: any) {
                setError(error.message);
            }
            finally {
                setIsLoading(false);
            }
        }
    }, [summaryData]);

    const createNewInvoice = (formInvoiceData: NewInvoice) => {
        const uuid = '1233';
        const status = 'UNPAID';
        const newInvoice: Invoice = { ...formInvoiceData, uuid, status };

        // TODO: Check for repeated reference number
        setData((prev) => [...prev, newInvoice]);
    };

    const editExistingInvoice = (formInvoiceData: Invoice) => {
        // TODO: Update existing invoice
        // setData((prev) => [...prev, newInvoice]);
    };

    return { data, error, isLoading, createNewInvoice, editExistingInvoice };
}
    