import { useEffect, useState } from "react";
import { Transactions } from "~/@types";
import { mockRequestSummary } from "~/utils/mock";

export default function useSummaryData() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);
    const [data, setData] = useState<{transactions: Transactions[] } | null>(null);
    
    useEffect(() => {
        setIsLoading(true);
        try {
            const d = mockRequestSummary();
            setData(d);
        } catch (error: any) {
            setError(error.message);
        }
        finally {
            setIsLoading(false);
        }
    }, []);

    return { data, error, isLoading };
}
