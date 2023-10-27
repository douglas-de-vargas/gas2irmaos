// ReactJs
import React, { ReactNode } from "react";

// NextJs
import Link from "next/link";

// Tipagem
interface LinkButtonProps {
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    Icon: ReactNode;
    text: string;
    to: string;
}

// Component
const LinkButton: React.FC<LinkButtonProps> = ({ onClick, Icon, text, to }) => {
    return (
        <Link href={to} onClick={onClick} className={"button"} passHref>
            {Icon} {text}
        </Link>
    );
};

export default LinkButton;
