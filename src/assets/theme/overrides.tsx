import { blueGrey } from '@material-ui/core/colors';
import { Overrides } from '@material-ui/core/styles/overrides';

const overrides: Overrides = {
  MuiTablePagination: {
    input: {
      padding: 0,
      marginLeft: 7,
      marginRight: 32
    },
    selectRoot: {
      marginLeft: 0,
      marginRight: 0
    },
    select: {
      paddingRight: 20
    }
  },
  MuiExpansionPanel: {
    root: {
      '&$expanded': {
        marginTop: 0,
        marginBottom: 0
      }
    }
  },
  MuiExpansionPanelDetails: {
    root: {
      display: 'block'
    }
  },
  MuiDialogContent: {
    root: {
      maxWidth: '100%'
    }
  },
  MuiDrawer: {
    paperAnchorDockedLeft: {
      borderRight: 'none'
    }
  },
  MuiFormControl: {
    marginNormal: {
      marginTop: 0,
      marginBottom: 16
    }
  },
  MuiFormHelperText: {
    contained: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  MuiTypography: {
    body1: {
      lineHeight: 'normal'
    },
    gutterBottom: {
      marginBottom: 16
    }
  },
  MuiFormControlLabel: {
    root: {
      marginBottom: 8
    }
  },
  MuiButton: {
    root: {
      textTransform: 'none',
      fontWeight: 500,
      borderRadius: 8
    }
  },
  MuiTableRow: {
    root: {
      '&:nth-of-type(even)': {
        backgroundColor: blueGrey[100]
      }
    }
  }
};

export default overrides;
