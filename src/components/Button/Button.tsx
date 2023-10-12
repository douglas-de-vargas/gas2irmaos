import React from "react";
import Link from "next/link";

interface ButtonProps {
  to: string;
  Icon: any;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ to, Icon, text }) => {
  return (
    <Link href={to} className={"button"}>
      {Icon} {text}
    </Link>
  );
};

export default Button;
