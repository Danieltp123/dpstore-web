import { useMemo } from 'react';

import cnpj from './cnpj';
import cpf from './cpf';
import creditCard from './creditCard';
import document from './document';
import money from './money';
import percent from './percent';
import phone from './phone';
import zipcode from './zipcode';

export interface IMaskFunction {
  apply(value: string | number): string | number;
  clean(value: string | number): string  | number;
}

const none: IMaskFunction = {
  apply: (value: string | number) => value,
  clean: (value: string | number) => value
} 

const maskHandlers = { zipcode, phone, document, cpf, cnpj, money, percent, none, creditCard };
export type Masks = keyof typeof maskHandlers;

export default function useMask(mask: Masks, value: any) {
  const { apply: maskApply, clean: maskClean } = useMemo(() => {
    let maskFunc = maskHandlers[mask];

    if (!maskFunc) {
      maskFunc = { apply: (v: string) => v, clean: v => v };
      mask && console.warn(`Mask '${mask}' not found`);
    }

    return maskFunc;
  }, [mask]);

  const maskedValue = useMemo(() => (maskApply ? maskApply(value) : value), [value, maskApply]);
  const cleanedValue = useMemo(() => (maskClean ? maskClean(value) : value), [value, maskClean]);

  return { maskApply, maskClean, maskedValue, cleanedValue };
}
