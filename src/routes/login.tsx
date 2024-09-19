import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LuMail } from "react-icons/lu";

export default function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Button onClick={() => setCount(count + 1)}>
          <LuMail className="mr-2 h-4 w-4" />
          {count}
        </Button>
      </div>
    </>
  );
}
