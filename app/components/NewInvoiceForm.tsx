// import { Form } from "@remix-run/react";
import { useState } from "react";
import { NewInvoice } from "~/@types";
import { formatDate } from "~/utils/helpers";

export default function NewInvoiceForm(
    { onSubmit }: { onSubmit: (newInvoiceData: NewInvoice) => void }
) {
    const [clientName, setClientName] = useState<string>();
    const [creationDate, setCreationDate] = useState<Date>();
    const [amount, setAmount] = useState<number>();
    const [reference, setReference] = useState<string>();

    // TODO: Remove setters after implementing API
    const clearForm = () => {
        setClientName('');
        setCreationDate(new Date());
        setAmount(undefined);
        setReference('');
    }

    const handleNewInvoice = () => {
        if (!clientName || clientName.length > 255) {
            window.alert('Client name cannot be empty and cannot be longer than 255 characters');
            return ;
        }
        if (typeof amount !== 'number') {
            window.alert('Amount has to be a number');
            return ;
        }
        if (!reference || reference.length > 8) {
            window.alert('Reference number has to be a format up to 8 characters');
            return ;
        }
        if (!creationDate) {
            window.alert('Creation date cannot be empty');
            return ;
        }
        onSubmit({ clientName, creationDate, amount, reference });
        clearForm();
    };
    
    const formattedDate = formatDate(creationDate);

    // TODO: Use form component with API call
    return (
        <div className="max-w-lg">
        {/* <Form onSubmit={handleNewInvoice} method="post"> */}
            <label htmlFor='client-name' className="block mb-2 text-sm font-medium">
                Client Name
            </label>
            <input type="text" name="invoice" value={clientName} onChange={e => setClientName(e.target.value)} className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            <label htmlFor='creating-date' className="block mb-2 text-sm font-medium">
                Creation Date
            </label>
            <input type="date" name="creating-date" value={formattedDate} onChange={e => setCreationDate(new Date(e.target.value))} className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            <label htmlFor='amount' className="block mb-2 text-sm font-medium">
                Amount
            </label>
            <input type="number" name="amount" value={amount} onChange={e => setAmount(Number(e.target.value))} className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            <label htmlFor='reference' className="block mb-2 text-sm font-medium">
                Reference
            </label>
            <input type="text" name="reference" value={reference} onChange={e => setReference(e.target.value)} className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block w-full mt-5"  onClick={handleNewInvoice}>
                Create
            </button>
        {/* </Form> */}
        </div>
    );
}
