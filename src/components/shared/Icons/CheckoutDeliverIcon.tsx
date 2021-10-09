import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function CheckoutDeliverIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 20 20"} width={20} height={20} {...wrapperProps}>
      <path
        d="M15.8302 14.4C15.0271 14.4 14.387 14.9367 14.387 15.5999C14.387 16.2632 15.0271 16.7999 15.8302 16.7999C16.6324 16.7999 17.2828 16.2632 17.2828 15.5999C17.2828 14.9367 16.6324 14.4 15.8302 14.4ZM9.55597 14.4C8.75283 14.4 8.11278 14.9367 8.11278 15.5999C8.11278 16.2632 8.75283 16.7999 9.55597 16.7999C10.3582 16.7999 11.0086 16.2632 11.0086 15.5999C11.0086 14.9367 10.3582 14.4 9.55597 14.4ZM17.0476 7.40619C16.91 7.27535 16.7111 7.19995 16.5013 7.19995H6.9062C6.50653 7.19995 6.18225 7.46871 6.18225 7.79995V8.39527L5.2646 8.45231C5.00914 8.46791 4.81025 8.64879 4.80506 8.85931C4.80506 8.86675 4.80035 8.87339 4.80081 8.88079L4.80224 8.91715C4.81167 9.13667 5.03602 9.33275 5.30043 9.35231L10.5288 9.74135C10.5283 9.74215 10.5288 9.74251 10.5283 9.74331C10.3893 9.97767 10.0099 10.1859 9.68559 10.2058L5.6883 10.4523C5.40929 10.4691 5.21585 10.6895 5.225 10.8808L5.22642 10.9168C5.23632 11.1367 5.46067 11.3324 5.72508 11.3519L9.95895 11.664C9.8331 11.8902 9.52721 12.0832 9.23358 12.1027L6.18225 12.305V14.6C6.18225 14.9312 6.50653 15.2 6.9062 15.2H7.19607C7.41948 14.2863 8.39228 13.5443 9.56068 13.5443C10.7281 13.5443 11.7019 14.2863 11.9253 15.2H13.4703C13.6937 14.2863 14.6665 13.5521 15.8349 13.5521C17.0023 13.5521 17.9761 14.2863 18.1995 15.2H18.4073C18.7783 15.2 19.0917 14.9675 19.1275 14.6621C19.6559 10.1832 17.1565 7.51011 17.0476 7.40619ZM14.387 10.8V8.39995H16.1384C16.4321 8.75579 16.9599 9.56791 17.3417 10.8H14.387Z"
        fill="#969EA8"
      />
    </IconWrapper>
  );
}
