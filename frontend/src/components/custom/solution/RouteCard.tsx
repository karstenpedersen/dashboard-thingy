import { Card, CardTitle } from "@/components/ui/card";
import { Route } from "@/consts/routes/routes";
import { useNavigate } from "react-router-dom";

interface Props {
  route: Route;
}

export default function SolutionCard({ route }: Props) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardTitle>{route.title}</CardTitle>
    </Card>
  );
}
