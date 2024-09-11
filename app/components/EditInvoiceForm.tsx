import { useState } from "react";
import { Invoice } from "~/@types";
import { formatDate } from "~/utils/helpers";

export type Props = {
    isEdit: boolean;
    invoice: Invoice;
    onEditInvoice: (invoice: Invoice) => void;
}

export default function EditInvoiceForm({ isEdit = false, invoice, onEditInvoice }: Props) {
    const [clientName, setClientName] = useState<string>(invoice.clientName);
    const [creationDate, setCreationDate] = useState<Date>(invoice.creationDate);
    const [amount, setAmount] = useState<number>(invoice.amount);
    const [reference, /* setReference */] = useState<string>(invoice.reference);

    const handleEditInvoice = () => {
        if (!clientName || clientName.length > 255) {
            window.alert('Client name cannot be empty and cannot be longer than 255 characters');
            return ;
        }
        if (typeof amount !== 'number') {
            window.alert('Amount has to be a number');
            return ;
        }
        if (!creationDate) {
            window.alert('Creation date cannot be empty');
            return ;
        }
        onEditInvoice({ ...invoice, clientName, creationDate, amount, reference });
    };

    const formattedDate = formatDate(creationDate);

    // TODO: Use form component with API call
    return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 bg-gray-800 border-gray-700">
            {/* <Form onSubmit={handleNewInvoice} method="post"> */}
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Ref: {reference}
            </h5>
            <div className="text-gray-900 dark:text-white">
                <span>👤</span>
                <input type="text" name="invoice" value={clientName} onChange={e => setClientName(e.target.value)} disabled={!isEdit} className="text-1xl font-semibold dark:bg-gray-800 dark:border-gray-700 bg-gray-800 border-gray-700 w-full" />
                <input type="number" name="amount" value={amount} onChange={e => setAmount(Number(e.target.value))} disabled={!isEdit} className="text-3xl font-extrabold dark:bg-gray-800 dark:border-gray-700 bg-gray-800 border-gray-700 w-full" />
            </div>
            <ul role="list" className="space-y-5 my-7 text-gray-900 dark:text-white">
                <li className="flex items-center">
                    <span>📅</span>
                    <input type="date" name="creating-date" value={formattedDate} onChange={e => setCreationDate(new Date(e.target.value))} disabled={!isEdit} className="text-1xl font-semibold dark:bg-gray-800 dark:border-gray-700 bg-gray-800 border-gray-700 w-full" />
                </li>
            </ul>
            {isEdit && (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleEditInvoice}>
                    Edit
                </button>
            )}
        {/* </Form> */}
        </div>
    );
}