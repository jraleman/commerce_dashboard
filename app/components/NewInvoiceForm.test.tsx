import { render } from "@testing-library/react";
import NewInvoiceForm from "./NewInvoiceForm";

describe('NewInvoiceForm', () => {
    it('should render correctly', () => {
        const newInvoiceForm = render(<NewInvoiceForm onSubmit={() => {}} />);
        expect(newInvoiceForm).toBeTruthy();
    })

    it('create new invoice', () => {
        const newInvoiceForm = render(<NewInvoiceForm onSubmit={() => {}} />);
        // 1. Access component inputs (states)
        // 2. Write new values to state (cliebtName, creationDate, amount, reference)
        // 3. fire event (onSubmit)
        // 4. Read the state and compare with the expected values

        // expect(clientNameInput).toBeTruthy();
    })
})