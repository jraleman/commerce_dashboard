import { useEffect, useState } from "react";

const mockRequest = () => ({

})

export default function useSummaryData() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    
    useEffect(() => {
        // TODO: get summary data
        setIsLoading(true);
        // TODO: request, trycatch
        const d = mockRequest();
        // setData(d);
        setIsLoading(false);
    }, []);

    return { data };
}