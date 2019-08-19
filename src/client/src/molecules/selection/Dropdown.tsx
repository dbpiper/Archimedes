import { Select, SelectProps } from '@molecules/helpers/Select';
import React from 'react';

export type DropdownProps = Omit<SelectProps, 'dropdown' | 'small'>;

export const Dropdown = (props: DropdownProps) => (
  <Select dropdown={true} {...props} />
);
