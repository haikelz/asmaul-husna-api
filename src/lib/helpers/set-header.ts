import { Context, Env } from "hono";
import { BlankInput } from "hono/types";

type APIHeaderProps = {
  contentType: string;
  accept: string;
};

/**
 * Set header API
 * @export
 * @param {Context<Env, string, BlankInput>} ctx
 * @param {APIHeaderProps} param0
 * @param {string} param0.contentType
 * @param {string} param0.accept
 */
export function setHeader(
  ctx: Context<Env, string, BlankInput>,
  { contentType, accept }: APIHeaderProps
) {
  ctx.header("Content-Type", contentType);
  ctx.header("Accept", accept);
}
