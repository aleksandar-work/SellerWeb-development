import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IFieldProps {
  styles?: IStyleFunctionOrObject<IFieldStyleProps, IFieldStyles>;
  status?: FieldStatus;
  message?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  label?: string;
  isLabelActive?: boolean;
}

export interface IFieldStyleProps {
  status?: FieldStatus;
  isLabelActive: boolean;
}

export interface IFieldStyles {
  root: IStyle;
  label: IStyle;
  message: IStyle;
}

export enum FieldStatus {
  Default,
  Success,
  Error,
}
