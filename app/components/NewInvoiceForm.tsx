import { useState } from "react";
import { NewInvoice } from "~/@types";
import useInvoices from "~/hooks/useInvoices";

export default function NewInvoiceForm(
    { onSubmit }: { onSubmit: (newInvoiceData: NewInvoice) => void }
) {
    const [clientName, setClientName] = useState('');
    const [creationDate, setCreationDate] = useState(new Date());
    const [amount, setAmount] = useState<number>();
    const [reference, setReference] = useState('');

    const handleNewInvoice = () => {
        if (!clientName || clientName.length > 255) {
            window.alert('Client name cannot be empty and cannot be longer than 255 characters');
            return ;
        }
        if (!amount) {
            window.alert('Amount has to be a number');
            return ;
        }

        onSubmit({ clientName, creationDate, amount, reference });
        // TODO: Remove after implementing API
        setClientName('');
        setCreationDate(new Date());
        setAmount(undefined);
        setReference('');
    };
    
    return (
        <div>
            {/* <form onSubmit={handleNewInvoice}> */}
                <div>
                    <label htmlFor='client-name' style={{display: 'block'}}>Client Name</label>
                    <input type="text" name="invoice" value={clientName} onChange={e => setClientName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='creating-date'  style={{display: 'block'}}>Creation Date</label>
                    <input type="date" name="creating-date" value={creationDate.toISOString()} onChange={e => setCreationDate(new Date(e.target.value))} />
                </div>
                <div>
                    <label htmlFor='amount' style={{display: 'block'}}>Amount</label>
                    <input type="number" name="amount" value={amount} onChange={e => setAmount(e.target.value)}  />
                </div>
                <div>
                    <label htmlFor='reference' style={{display: 'block'}}>Reference</label>
                    <input type="text" name="reference" value={reference} onChange={e => setReference(e.target.value)}  />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                // type="submit" 
                onClick={handleNewInvoice}
                >
                    Create new invoice
                </button>
            {/* </form> */}
            <hr />
        </div>
    );
}
