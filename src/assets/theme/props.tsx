import { ComponentsProps } from '@material-ui/core/styles/props';

const props: ComponentsProps = {
  MuiTextField: {
    variant: 'outlined',
    margin: 'dense',
    size: 'small',
    color: 'secondary',
    fullWidth: true
  },
  MuiFormControl: {
    variant: 'outlined',
    fullWidth: true,
    margin: 'dense'
  },
  MuiInputLabel: {
    margin: 'dense'
  },
  MuiSelect: {
    margin: 'dense'
  },
  MuiGrid: {
    spacing: 3
  },
  MuiTypography: {
    variantMapping: {
      h1: 'div',
      h2: 'div',
      h3: 'div',
      h4: 'div',
      h5: 'div',
      h6: 'div',
      subtitle1: 'div',
      subtitle2: 'div',
      body1: 'div',
      body2: 'div',
      caption: 'div',
      button: 'div',
      overline: 'div'
    }
  }
};

export default props;
