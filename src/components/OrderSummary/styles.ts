import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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