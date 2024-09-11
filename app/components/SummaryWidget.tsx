import { useEffect, useState } from "react";
import { Transactions } from "~/@types";
import { formatDate, getMoneyStatusColor } from "~/utils/helpers";

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

    const totalMoneyColor = getMoneyStatusColor(totalMoney, threshold);
    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8 mx-auto max-w-screen-xl lg:py-16 justify-items-center">
                {transactions?.length === 0 && <p>No transactions</p>}
                {/* TODO: Show the number of invoices created in the last 30 days */}
                {transactions?.map(({ description, date, uuid, reference, amount }) => (
                    <div key={uuid} className="card bg-neutral w-72 shadow-xl p-4">
                        <h4 className="card-title">
                            Ref: {reference}
                        </h4>
                        <div className="card-body">
                            <p className="text-sm">{formatDate(date)}</p>
                            <p className="text-sm">{description}</p>
                            <p className="text-lg">{amount}</p>
                        </div>
                    </div>
                ))}
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
            <div className={`flex items-center p-4 mb-4 text-sm rounded-lg bg-gray-200`} role="alert">
                <div style={{ color: totalMoneyColor }}>
                    <span className="font-medium">Total: </span>
                    <span>$ {totalMoney}</span>
                </div>
            </div>
        </>
    );
};
