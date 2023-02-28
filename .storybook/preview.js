import React, { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const withQueryClientProvider = () => (getStory) => {
  const client = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          cacheTime: 0,
          refetchOnWindowFocus: false,
        },
      },
    });
  }, []);

  return (
    <QueryClientProvider client={client}>{getStory()}</QueryClientProvider>
  );
};

export const decorators = [withQueryClientProvider()];
