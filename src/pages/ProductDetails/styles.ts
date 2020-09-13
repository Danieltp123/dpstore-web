import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    paper: {
      padding: theme.spacing(2),
      borderRadius: theme.spacing(2)
    }
  }),
);


export default useStyles;