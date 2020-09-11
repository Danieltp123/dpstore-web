import Snackbar from '@material-ui/core/Snackbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { errorMessageFormatter } from 'formatters/errorMessage';
import React, {
  ComponentType, MemoExoticComponent, useCallback, useMemo,
} from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import ToastGlobalProvider, { showGlobalToast } from './global';

const TOAST_DEFAULT_TIMEOUT = 3000;
const TOAST_ERROR_TIMEOUT = 4000;

interface IProps {
  opened: boolean;
  message?: string;
  timeout?: number;
  error?: Error;
  onClose: () => void;
}

type ToastComponent = MemoExoticComponent<ComponentType<IProps>> & {
  Global: JSX.Element;

  show?(message: string, timeout?: number): Promise<void>;
  error?(error: any): Promise<void>;
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    [theme.breakpoints.up('sm')]: {
      top: '24px',
      left: 'auto',
      right: '24px',
    },
  },
  contentError: {
    background: theme.palette.error.main,
  },
  close: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Toast = (props: IProps): JSX.Element => {
  const classes = useStyles(props);

  const [message, isError] = useMemo(() => (props.message
    ? [props.message, false]
    : [errorMessageFormatter(props.error), true]
  ), [props.error, props.message]);

  const handleClose = useCallback(
    (event: any, reason?: string) => {
      if (reason === 'clickaway') return;
      props.onClose();
    },
    [props],
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={props.opened}
      autoHideDuration={props.timeout}
      onClose={handleClose}
      className={classes.wrapper}
    >
      <Alert
        severity={isError ? 'error' : 'success'}
        onClose={handleClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

Toast.Global = ToastGlobalProvider;

Toast.show = (message: string, timeout?: number) => showGlobalToast(
  message, null, timeout || TOAST_DEFAULT_TIMEOUT,
);

Toast.error = (error: any) => showGlobalToast('', error, TOAST_ERROR_TIMEOUT);

export default Toast;
