import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{
      borderRadius: theme.spacing(2),
      cursor: 'pointer',
      '&:hover': {
        boxShadow: `${theme.shadows[12]} !important`
      }
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      backgroundSize: 'contain'
    },
    iconButton:{
      paddingRight:20,
      paddingBottom:20
    }
  }),
);


export default useStyles;