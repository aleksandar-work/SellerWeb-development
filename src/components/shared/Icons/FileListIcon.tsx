import { ReactElement } from "react";
import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function FileListIcon({ ...wrapperProps }: IconProps): ReactElement {
  return (
    <IconWrapper viewBox={"0 0 20 24"} width={20} height={24} {...wrapperProps}>
      <path d="M4.61538 13.6009H15.3846V12.0008H4.61538V13.6009ZM4.61538 10.4007H15.3846V8.80058H4.61538V10.4007ZM19.097 0.828215C18.9506 0.794613 15.4545 0 10.006 0C4.55754 0 1.05092 0.793813 0.903692 0.828215C0.375615 0.950063 0 1.43762 0 1.99933V22.0015C0 22.564 0.375615 23.0515 0.903692 23.1734C3.04235 23.6613 7.49838 24.1621 12.3197 23.9499C14.4734 23.95 20 18.2301 20 16.0011V1.99933C20 1.43762 19.6244 0.950863 19.097 0.828215ZM17.6923 14.8002C17.6923 15.4627 17.1755 16.0003 16.5385 16.0003V16.0011H13.4893C13.4893 16.0027 13.4893 16.0027 13.4893 16.0034C13.4818 16.0034 13.4751 16.0011 13.4676 16.0011C12.829 16.0011 12.3137 16.5386 12.3137 17.2011C12.3137 17.209 12.316 17.2167 12.316 17.2238C12.3152 17.2238 12.3145 17.2238 12.3137 17.2238V20.3693C12.3137 20.3748 12.3152 20.3795 12.3152 20.3857C12.3152 20.3904 12.3137 20.3951 12.3137 20.4006V20.4014C12.3048 21.0486 11.805 21.6718 11.1554 21.6718C11.1554 21.6733 11.1554 21.6733 11.1554 21.6749C7.93869 21.7488 5.32169 21.5148 2.30769 21.0014V2.9986C3.64258 2.77206 6.37996 2.31423 10.006 2.31423C13.6178 2.31423 16.3559 2.77202 17.6923 2.9994L17.6953 14.801C17.6938 14.801 17.6931 14.8002 17.6923 14.8002ZM4.61538 7.20048H15.3846V5.60037H4.61538V7.20048Z" />
    </IconWrapper>
  );
}
