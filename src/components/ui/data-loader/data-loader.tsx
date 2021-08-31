import { withIndicator } from '../../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { FC } from 'react';

type DataLoaderProps = {
  label: string;
  handler(): void;
};

const DataLoader: FC<DataLoaderProps> = (props) => {
  const { label, handler } = props;
  return (
    <div className="d-flex justify-content-center my-3">
      <button className="btn btn-lg btn-outline-success" onClick={handler}>
        {label}
      </button>
    </div>
  );
};

export default withIndicator<DataLoaderProps>(Spinner, ErrorIndicator)(DataLoader);
