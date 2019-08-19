import { Select, SelectProps } from '@molecules/helpers/Select';
import React from 'react';

export type SearchFieldProps = Omit<SelectProps, 'dropdown'>;

export const SearchField = (props: SearchFieldProps) => <Select {...props} />;
