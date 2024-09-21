import logo from "@/assets/react.svg";

interface Props {
  className?: string;
}

export default function Logo(props: Props) {
  return <img src={logo} alt="Logo" {...props} />;
}
