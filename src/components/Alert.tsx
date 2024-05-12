import React from 'react';

interface IAlertProps extends React.PropsWithChildren {
  severity: 'info' | 'success' | 'warning' | 'error';
}

export const Alert: React.FC<IAlertProps> = ({ children, severity }) => <div
  className={'alert-' + severity}
>
  {children}
</div>;

export default Alert;
