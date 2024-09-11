import { NewInvoice } from "~/@types";
import InvoicesWidget from "~/components/InvoicesWidget";
import NewInvoiceForm from "~/components/NewInvoiceForm";
import SummaryWidget from "~/components/SummaryWidget";
import useInvoices from "~/hooks/useInvoices";
import useSummaryData from "~/hooks/useSummaryData";

export default function Dashboard() {
    const { isLoading: isLoadingSummary, error: errorSummary, data: summaryData } = useSummaryData();
    const { 
        isLoading: isLoadingInvoices, error: errorInvoices, data: invoicesData, 
        createNewInvoice
    } = useInvoices({ summaryData });

    // TODO: Implement function to change threshold
    const threshold = 5;

    // TODO: Implement handlers functions
    // Users should be able to create a new invoice.

    const handleEditInvoice = () => {

    };

    const handleNewInvoice = (newInvoiceData: NewInvoice) => {
        createNewInvoice(newInvoiceData);
    };
    
    return (
        <div className="m-4 mx-auto max-w-screen-xl">
            <h1 className="mt-10 tracking-wide text-center mb-4 text-6xl font-extrabold leading-none tracking-tight">
                Dashboard
            </h1>
            <h2 className="mt-10 tracking-wide mb-4 text-xl font-extrabold leading-none tracking-tight">
                Summary
            </h2>
            {errorSummary && <p>{errorSummary}</p>}
            {isLoadingSummary ? <p>Loading...</p> : (
                <SummaryWidget 
                    transactions={summaryData?.transactions}
                    threshold={threshold}
                />
            )}
            <br />
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> 
            <br />
            <h2 className="mt-10 tracking-wide mb-4 text-xl font-extrabold leading-none tracking-tight">
                Invoices
            </h2>
            {errorInvoices && <p>{errorInvoices}</p>}
            {isLoadingInvoices ? <p>Loading...</p> : (
                <InvoicesWidget 
                    invoices={invoicesData}
                    onEditInvoice={handleEditInvoice}
                />
            )}
            <NewInvoiceForm 
                onSubmit={handleNewInvoice}
            />
        </div>
    );
}