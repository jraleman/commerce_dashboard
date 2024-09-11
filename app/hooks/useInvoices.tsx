import { useEffect, useState } from "react";

export default function useInvoices({ summaryData }: any) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (summaryData) {
            setIsLoading(true);
            // TODO: request, trycatch
            setIsLoading(false);
        }
    }, [summaryData]);
}