import Badge from '@material-ui/core/Badge';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    badge: {
      right: -3,
      top: theme.spacing(2),
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
    total:{
      marginRight: theme.spacing(1)
    },
    container: {
      ...theme.mixins.toolbar,
      display: 'flex',
      flex: 1,
      position: 'relative',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      minHeight:'57vh !important'
    },
    logo:{
      backgroundColor: theme.palette.secondary.main,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center'
    },
    footer:{
      width: '100%',
      textAlign: 'center'
    }
  }),
);

export const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }),
)(Badge);

export default useStyles