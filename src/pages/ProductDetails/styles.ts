import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      backgroundSize: 'contain'
    },
    paper: {
      padding: theme.spacing(2),
      borderRadius: theme.spacing(2)
    },
    backdrop:{
      zIndex: theme.zIndex.drawer + 1
    },
    productInfo:{
      height: '100%'
    }
  }),
);


export default useStyles;