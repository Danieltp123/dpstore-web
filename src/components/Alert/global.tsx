import React, { useCallback, useEffect, useState } from 'react';

import Alert, { IAlertShowParams } from '.';

let lastPromise = Promise.resolve(false);
let globalAlert: (params: IAlertShowParams) => Promise<boolean>;

const AlertGlobalProvider = (): JSX.Element => {
  const [opened, setOpened] = useState<boolean>(false);
  const [params, setParams] = useState<IAlertShowParams>();
  const [promiseResolve, setPromiseResolve] = useState<(result: boolean) => void>();

  const handleShow = useCallback((_params: IAlertShowParams): Promise<boolean> => {
    const result = new Promise<boolean>((resolve) => {
      setPromiseResolve(() => resolve);
      setOpened(true);
      setParams({ confirmation: false, title: undefined, ..._params });
    });

    result.then(() => setOpened(false));
    return result;
  }, []);

  const onClose = useCallback(
    (ok: boolean) => {
      if (promiseResolve) promiseResolve(ok);
    },
    [promiseResolve],
  );

  useEffect(() => {
    // if (globalAlert) throw new Error('Only one Alert.Global can be initialized');
    globalAlert = handleShow;
  }, [handleShow, params]);

  return <Alert opened={opened} message="" {...params} onClose={onClose} />;
};

export async function showGlobalAlert(params: IAlertShowParams): Promise<boolean> {
  if (!globalAlert) throw new Error('Please, initialize an Alert.Global before');

  // prevent an alert to overhide another
  // eslint-disable-next-line no-return-assign
  return (lastPromise = lastPromise.then(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 300));
    return globalAlert(params);
  }));
}

export default AlertGlobalProvider;
