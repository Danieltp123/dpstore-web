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
    },
    card:{
      width: '100%',
      borderRadius: theme.spacing(2)
    },
    spaceBetween:{
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(1)
    }
  })
);


export default useStyles;