import tw from "twin.macro";
import { getCommonFieldStyle } from "../styles/getCommonFieldStyle";
import { IInputStyleProps, IInputStyles } from "./Input.types";

export function getStyles({ status, isLabelActive, hasLeftIcon, fieldClassName }: IInputStyleProps): IInputStyles {
  return {
    input: [getCommonFieldStyle({ status, isLabelActive }), hasLeftIcon && tw`pl-9`],
    subComponentStyles: {
      field: {
        root: fieldClassName,
      },
    },
  };
}
