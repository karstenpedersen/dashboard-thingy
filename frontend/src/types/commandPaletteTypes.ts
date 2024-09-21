import { iconNamesEnum } from "@/consts/icons";
import { z } from "zod";

const scopeEnum = z.enum(["all", "page"]);
const commandSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: iconNamesEnum,
  scope: scopeEnum,
  function: z.function(),
});

export type Command = z.infer<typeof commandSchema>;

export function isCommand(object: any): object is Command {
  return object && commandSchema.safeParse(object).success;
}
