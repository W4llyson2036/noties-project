import { useQueryClient } from "@tanstack/react-query";

export function useRefetchQuery(queryName) {
    const queryClient = useQueryClient();

    return () => {
        queryClient.refetchQueries(`${queryName}`);
    };
}