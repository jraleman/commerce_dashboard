import { useState } from "react";
import { Invoice } from "~/@types";
import EditInvoiceForm from "./EditInvoiceForm";

export type Props = {
    invoices: Invoice[] | null;
    onEditInvoice: (invoice: Invoice) => void;
}

export default function InvoicesWidget({ invoices = [], onEditInvoice }: Props) {
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const toggleEdit = () => {
        setIsEdit(!isEdit);
    };

    const handleEditInvoice = (invoice: Invoice) => {
        onEditInvoice(invoice);
    };

    return (
        <>
            <button onClick={toggleEdit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn btn-primary block w-full mb-5">
                {!isEdit ? 'Edit invoices' : 'Cancel'}
            </button>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8 mx-auto max-w-screen-xl lg:py-16 justify-items-center">
                {invoices?.length === 0 && <p>No invoices</p>}
                {invoices?.map((invoice) => (
                    <EditInvoiceForm 
                        key={invoice.uuid}
                        invoice={invoice}
                        onEditInvoice={handleEditInvoice}
                        isEdit={isEdit}
                    />
                ))}
            </div>
        </>
    );
}
