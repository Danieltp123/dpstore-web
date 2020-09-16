import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import useWindowResize from 'hooks/useWindowResize';
import React, { ComponentType, forwardRef, memo, MemoExoticComponent, useCallback } from 'react';

import AlertGlobalProvider, { showGlobalAlert } from './global';

interface IProps {
  opened: boolean;
  message: React.ReactNode;
  title?: string;
  confirmation?: boolean;
  delete?: boolean;
  confirmText?: string;
  // global?: boolean;
  onClose: (ok: boolean) => void;
}

export interface IAlertShowParams {
  message: React.ReactNode;
  title?: string;
  confirmation?: boolean;
  delete?: boolean;
  confirmText?: string;
}

type AlertComponent = MemoExoticComponent<ComponentType<IProps>> & {
  Global: typeof AlertGlobalProvider;

  show?(params: string): Promise<boolean>;
  show?(params: IAlertShowParams): Promise<boolean>;

  confirm?(params: string): Promise<boolean>;
  confirm?(params: IAlertShowParams): Promise<boolean>;
};

const Transition = memo(
  forwardRef((props: any, ref: any) => <Slide direction="up" {...props} ref={ref} />),
);

const Alert = (props: IProps): JSX.Element => {
  const theme = useTheme();
  const handleOk = useCallback(() => props.onClose(true), [props]);
  const element = React.useRef<any>();
  const handleCancel = useCallback(() => props.onClose(false), [props]);
  useWindowResize(() => {
    if (element?.current !== null) element.current.querySelector('.MuiBackdrop-root').dispatchEvent(new Event('click', { bubbles: true }));
  });

  return (
    <Dialog
      open={props.opened}
      keepMounted
      TransitionComponent={Transition}
      onClose={handleCancel}
      style={{
        zIndex: theme.zIndex.modal + 1,
      }}
      maxWidth="xs"
      ref={element}
    >
      <DialogTitle>
        <Typography
          variant="h5"
          color={props.delete ? 'error' : 'secondary'}
        >
          {props.title || (props.confirmation ? 'Confirmação' : 'Atenção')}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography color="secondary">
          {props.message}
        </Typography>
      </DialogContent>
      <DialogActions>
        {props.confirmation && (
          <Button data-cy="cancel-dialog" onClick={handleCancel} color="secondary">
            Cancelar
          </Button>
        )}
        <Typography color={props.delete ? 'error' : 'secondary'}>
          <Button data-cy="confirm-dialog" autoFocus={!props.confirmation} onClick={handleOk} color="inherit">
            {props.confirmText || (props.confirmation ? 'Confirmar' : 'Ok')}
          </Button>
        </Typography>
      </DialogActions>
    </Dialog>
  );
};

Alert.Global = AlertGlobalProvider;

Alert.show = (params: string | IAlertShowParams) => {
  const paramsData = typeof params === 'string' ? { message: params } : params;
  return showGlobalAlert(paramsData);
};

Alert.confirm = (params: string | IAlertShowParams) => {
  const paramsData = typeof params === 'string' ? { message: params } : params;
  return showGlobalAlert({ confirmation: true, ...paramsData });
};

export default Alert;
