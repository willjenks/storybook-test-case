import * as React from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "react-error-boundary";

const Error = () => <div>Error!</div>;
const Loading = () => <div>Loading...</div>;

const prom = () =>
  new Promise((res, rej) => {
    setTimeout(
      () =>
        res({
          status: 200,
          json: async () => ({
            data: "hello",
          }),
        }),
      100
    );
  });

const doFetch = async ({ shouldError }) => {
  const res = await prom();
  if (shouldError) {
    throw new Error("errk");
  }
  const data = await res.json();
  return data;
};

const DataFetcher = ({ shouldError }) => {
  const {
    data: { data },
  } = useQuery("my-component", async () => doFetch({ shouldError }), {
    suspense: true,
  });

  return <>{data}</>;
};

const Suspender = ({ shouldError }) => {
  return (
    <ErrorBoundary fallback={<Error />}>
      <React.Suspense fallback={<Loading />}>
        <DataFetcher shouldError={shouldError} />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export { Suspender };
