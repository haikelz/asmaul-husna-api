import { Context, Env } from "hono";
import { BlankInput } from "hono/types";

type APIHeaderProps = {
  contentType: string;
  accept: string;
};

export function setHeader(
  ctx: Context<Env, string, BlankInput>,
  { contentType, accept }: APIHeaderProps
) {
  ctx.header("Content-Type", contentType);
  ctx.header("Accept", accept);
}
