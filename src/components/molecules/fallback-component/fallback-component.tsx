import React from 'react';

import { FallbackProps } from 'react-error-boundary';
import { Button, Card, Result } from '../../atoms';

const FallBackComponent: React.FC<FallbackProps> = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Card>
      <Result
        status="error"
        title={'Please contact admin'}
        subTitle={error?.message}
        extra={[
          <Button onClick={resetErrorBoundary} key="buy">
            Try Again
          </Button>
        ]}
      />
    </Card>
  );
};

export default FallBackComponent;
