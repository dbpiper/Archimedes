export interface IThemeSpacing {
  baseUnit: number;
  controlHeight: number;
  menuGutter: number;
}

export interface ITheme {
  borderRadius: number;
  colors: { [key: string]: string };
  spacing: IThemeSpacing;
}

export type ValueType<OptionType> =
  | OptionType
  | OptionsType<OptionType>
  | null
  | undefined;

export type ActionTypes =
  | 'select-option'
  | 'deselect-option'
  | 'remove-value'
  | 'pop-value'
  | 'set-value'
  | 'clear'
  | 'create-option';

export interface ActionMeta {
  action: ActionTypes;
}

export type OptionType =
  | string
  | number
  | RegExp
  | ((input: string) => boolean);
