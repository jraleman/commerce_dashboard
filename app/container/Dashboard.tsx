import { Invoice, NewInvoice } from "~/@types";
import InvoicesWidget from "~/components/InvoicesWidget";
import NewInvoiceForm from "~/components/NewInvoiceForm";
import SummaryWidget from "~/components/SummaryWidget";
import useInvoices from "~/hooks/useInvoices";
import useSummaryData from "~/hooks/useSummaryData";

export default function Dashboard() {
    const { isLoading: isLoadingSummary, error: errorSummary, data: summaryData } = useSummaryData();
    const { 
        isLoading: isLoadingInvoices, error: errorInvoices, data: invoicesData, 
        createNewInvoice, editExistingInvoice
    } = useInvoices({ summaryData });

    // TODO: Implement functionality to change threshold
    const threshold = 5;

    const handleEditInvoice = (editInvoiceData: Invoice) => {
        editExistingInvoice(editInvoiceData)
    };

    const handleNewInvoice = (newInvoiceData: NewInvoice) => {
        createNewInvoice(newInvoiceData);
    };
    
    return (
        <div className="m-4 mx-auto max-w-screen-xl">
            <h1 className="mt-10 tracking-wide text-center mb-4 text-6xl font-extrabold leading-none tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Dashboard
                </span>
            </h1>
            <h2 className="text-2xl font-bold tracking-tightsm:text-6xl text-center mt-5">
                SummaryWidget
            </h2>
            {errorSummary && <p>{errorSummary}</p>}
            {isLoadingSummary ? <p>Loading...</p> : (
                <SummaryWidget transactions={summaryData?.transactions} threshold={threshold} />
            )}
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> 
            <h2 className="text-2xl font-bold tracking-tightsm:text-6xl text-center mt-5 mb-5">
                InvoicesWidget
            </h2>
            {errorInvoices && <p>{errorInvoices}</p>}
            {isLoadingInvoices ? <p>Loading...</p> : (
                <InvoicesWidget invoices={invoicesData} onEditInvoice={handleEditInvoice} />
            )}
            <h3 className="mt-10 tracking-wide mb-4 text-lg font-extrabold leading-none tracking-tight">
                Create a new invoice
            </h3>
            <NewInvoiceForm onSubmit={handleNewInvoice} />
        </div>
    );
}