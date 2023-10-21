// ReactJs
import React, { ReactNode } from "react";

// NextJs
import Link from "next/link";

// Tipagem
interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    Icon: ReactNode;
    text: string;
    to: string;
}

// Component
const Button: React.FC<ButtonProps> = ({ onClick, Icon, text, to }) => {
    return (
        <Link href={to} onClick={onClick} className={"button"} passHref>
            {Icon} {text}
        </Link>
    );
};

export default Button;
