import { PropsWithChildren } from "react";

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

const DotButton: React.FC<PropType> = ({ children, ...rest }) => {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
};
export default DotButton;
