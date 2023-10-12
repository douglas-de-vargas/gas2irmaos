import type { IconType } from "react-icons";

interface iButtonProps {
  to: string;
  Icon?: IconType;
  text: string;
}

export default function Button(props: iButtonProps)
	{ 
		const {to, Icon, text } = props
  return (
    <>
      <a href={to}>
        <button className="button">
          {Icon}
          {text}
        </button>
      </a>
    </>
  );
}
