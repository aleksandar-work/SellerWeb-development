import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function ArrowMedRightIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 14 24"} width={14} height={24} {...wrapperProps}>
      <path d="M0.352129 22.1041C-0.087517 22.5089 -0.119881 23.1981 0.279843 23.6434C0.648819 24.0544 1.25699 24.1139 1.69416 23.8022L1.79966 23.7166L13.6479 12.8062C14.0838 12.4048 14.115 11.7313 13.7413 11.291L13.6479 11.1938L1.79966 0.283428C1.36001 -0.121416 0.679567 -0.0886381 0.279843 0.35664C-0.0891326 0.767665 -0.0899392 1.3865 0.257914 1.79769L0.352129 1.89592L10.8874 11.5969C11.1072 11.7993 11.1234 12.1439 10.9235 12.3665L10.8874 12.4031L0.352129 22.1041Z" />
    </IconWrapper>
  );
}
