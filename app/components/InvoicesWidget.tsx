import { Invoice } from "~/@types";

export type Props = {
    invoices: Invoice[] | null;
    onEditInvoice: (invoice: Invoice) => void;
}

export default function InvoicesWidget({ invoices = [], onEditInvoice }: Props) {
    
    const handleEditInvoice = ({ target }: React.FormEvent<HTMLFormElement>) => {
        console.log({target})
        // onEditInvoice(invoice);
    };

    return (
        <div>
            <h1>Invoices</h1>
            {invoices?.map(({ uuid, clientName, creationDate, reference, amount, status }) => (
                <>
                    <form key={`form-${uuid}`} id={uuid} onSubmit={handleEditInvoice}>
                        <div>
                            <label htmlFor='client-name' style={{display: 'block'}}>Client Name</label>
                            <input type="text" name="invoice" value={clientName} />
                        </div>
                        <div>
                            <label htmlFor='creating-date'  style={{display: 'block'}}>Creation Date</label>
                            <input type="date" name="creating-date" value={creationDate.toISOString()} />
                        </div>
                        <div>
                            <label htmlFor='reference'  style={{display: 'block'}}>Reference number</label>
                            <input type="text" name="reference" value={reference} disabled />
                        </div>
                        <div>
                            <label htmlFor='amount'  style={{display: 'block'}}>Amount</label>
                            <input type="text" name="amount" value={amount} />
                        </div>
                        <div>
                            <label htmlFor='status'  style={{display: 'block'}}>Status</label>
                            <input type="text" name="status" value={status} disabled />
                        </div>
                    </form>
                    <hr />
                </>
            ))}
            {invoices?.length === 0 && <p>No invoices</p>}
        </div>
    );
}
