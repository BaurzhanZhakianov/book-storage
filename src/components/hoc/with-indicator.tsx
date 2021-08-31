import { FC } from 'react';

type IndicatorProps = {
  loading: boolean;
  error: string;
};

export default function withIndicator<P>(Loader: FC, Error: FC) {
  return (Wrapped: FC<P>) => (props: IndicatorProps & P) => {
    return props.error ? <Error /> : props.loading ? <Loader /> : <Wrapped {...(props as P)} />;
  };
}
