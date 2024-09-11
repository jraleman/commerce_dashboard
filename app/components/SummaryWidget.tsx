import { useEffect, useState } from "react";
import { Transactions } from "~/@types";

export type Props = {
    transactions: Transactions[] | undefined;
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

    let totalMoneyColor = 'black';

    if (totalMoney > threshold) {
        totalMoneyColor = 'green';
    } else if (totalMoney < 0) {
        totalMoneyColor = 'red';
    } else {
        totalMoneyColor = 'yellow';
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8 mx-auto max-w-screen-xl lg:py-16 justify-items-center">
            {transactions?.length === 0 && <p>No transactions</p>}
            {/* TODO: Show the number of invoices created in the last 30 days */}
            {transactions?.map(({ description, date, uuid, reference, amount }) => (
                <div key={uuid} className="card bg-neutral w-72 shadow-xl p-4">
                    <p>Date: {date.toISOString()}</p>
                    <p>Description: {description}</p>
                    <p>Reference: {reference}</p>
                    <p>Amount: {amount}</p>
                </div>
            ))}
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className={`flex items-center p-4 mb-4 text-sm rounded-lg`} role="alert">
                <div style={{ color: totalMoneyColor }}>
                    <span className="font-medium">Total: </span> $ {totalMoney}
                </div>
            </div>
        </div>
    );
};
