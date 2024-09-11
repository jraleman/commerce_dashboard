import { useEffect, useState } from "react";
import { Transactions } from "~/@types";

const mockRequest = () => ({
    transactions: [
        {
            date: new Date('1/1/2023'),
            description: 'Description of summary',
            uuid: '1234',
            reference: '1234',
            amount: 9000,
        },
        {
            date: new Date('1/1/2022'),
            description: 'Description of summary2',
            uuid: '2134',
            reference: '2224',
            amount: 4500,
        },
        {
            date: new Date('1/1/2024'),
            description: 'Description of summary3',
            uuid: '5433',
            reference: '5544',
            amount: -100,
        },
        {
            date: new Date('1/1/2023'),
            description: 'Description of summary',
            uuid: '1234',
            reference: '1234',
            amount: 9000,
        },
        {
            date: new Date('1/1/2022'),
            description: 'Description of summary2',
            uuid: '2134',
            reference: '2224',
            amount: 4500,
        },
        {
            date: new Date('1/1/2024'),
            description: 'Description of summary3',
            uuid: '5433',
            reference: '5544',
            amount: -100,
        }
    ],
});

export default function useSummaryData() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);
    const [data, setData] = useState<{transactions: Transactions[] } | null>(null);
    
    useEffect(() => {
        setIsLoading(true);
        try {
            const d = mockRequest();
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
