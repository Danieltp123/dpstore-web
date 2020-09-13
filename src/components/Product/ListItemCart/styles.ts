import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    actions:{
      display: "grid",
      gridTemplateColumns: "auto auto auto",
      gridGap: theme.spacing(1),
      alignItems: "center"
    }
  }),
);


export default useStyles;