import { useEffect, useState } from "react";

export type Transactions = {
    uuid: string;
    date: Date;
    description: string;
    reference: string;
    amount: number;
}

export type Props = {
    transactions: Transactions[];
    threshold: number;
}

export default function SummaryWidget({ 
    transactions = [],
    threshold = 0,
}: Props) {
    const [totalMoney, setTotalMoney] = useState(0);

    useEffect(() => {
        setTotalMoney(transactions.reduce((acc, { amount }) => acc + amount, 0));
    }, [transactions]);

    return (
        <div>
            <h1>Summary</h1>
            <p>
                {transactions?.map(({ description, date, uuid, reference, amount }) => (
                    <div key={uuid}>
                        <p>Date: {date.toISOString()}</p>
                        <p>Description: {description}</p>
                        <p>Reference: {reference}</p>
                        <p>Amount: {amount}</p>
                        <hr />
                    </div>
                ))}
            </p>
            {transactions.length === 0 ? <p>No transactions</p> : null}
            {totalMoney > threshold ? <p test-id='total-money' style={{ color: "green"}}>{totalMoney}</p> 
                : totalMoney < 0 ? <p style={{ color: "red"}}>{totalMoney}</p> : <p style={{ color: "yellow"}} >{totalMoney}</p>}
        </div>
    );
};

/*
TODO:
    4 // .filter method (< 30 days)
    show the number of invoices created in the last 30 days
*/