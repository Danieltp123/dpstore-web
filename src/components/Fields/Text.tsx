/* eslint-disable no-restricted-imports */
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import TextFieldCore, { TextFieldProps } from '@material-ui/core/TextField';
import { FormikContextType } from 'formik';
import useMask, { Masks } from 'hooks/useMask';
import React, { ChangeEvent, KeyboardEvent, memo, useCallback } from 'react';

type IProps = TextFieldProps & {
  name: string;
  loading?: boolean;
  mask?: Masks;
  formik?: FormikContextType<any>;
  hasError?: boolean;
};

const TextField = memo<IProps>(({ formik, mask, value, name, loading, onChange, hasError, InputProps, ...props }) => {
  value = formik ? formik.getFieldMeta(name).value : value;
  const { maskClean, maskedValue } = useMask(mask || 'none', value);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let value = e.currentTarget.value;
      if (props.type === 'number') {
        value = value.replace(/[A-Za-z]/gi, '');
        e.currentTarget.value = value;
      }

      if (!formik) {
        if(e && onChange) onChange(e);
        return;
      }

      formik.setFieldTouched(name, true, false);
      formik.setFieldValue(name, maskClean(value), true);
    },
    [formik, name, maskClean, onChange, props.type]
  );

  const handleKeyPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (props.type === 'number' && /[a-zA-Z]/gi.test(e.key)) {
        e.preventDefault();
      }
      if (props.onKeyPress) {
        props.onKeyPress(e);
      }
    },
    [props]
  );

  const _hasError = formik
    ? (formik?.getFieldMeta(name).touched || formik?.submitCount > 0) && !!formik?.getFieldMeta(name).error
    : hasError;

  return (
    <TextFieldCore
      {...props}
      error={_hasError}
      disabled={formik?.isSubmitting || props.disabled}
      helperText={_hasError && (formik ? formik.getFieldMeta(name)?.error : props.helperText)}
      name={name}
      value={maskedValue ?? ''}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      InputProps={{
        endAdornment:
          mask !== 'percent' ? (
            loading && (
              <InputAdornment position='end'>
                <CircularProgress color='secondary' size={20} />
              </InputAdornment>
            )
          ) : (
            <InputAdornment position='end'>
              %{loading && <CircularProgress color='secondary' size={20} />}
            </InputAdornment>
          ),
        ...(InputProps || {})
      }}
    />
  );
});

export default TextField;
