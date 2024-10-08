/**
 * A helper function to handle pagination
 * @export
 * @template T
 * @param {{
 *   data: T[];
 *   page?: number;
 *   limit?: number;
 * }} obj
 * @returns {*}
 */
export function handlePagination<T>(obj: {
  data: T[];
  page?: number;
  limit?: number;
}) {
  const { data, page, limit } = obj;

  // Just in case if limit and page is in decimal format
  const fixedLimit = Math.round(Number(limit));
  const fixedPage = Math.round(Number(page));

  /**
   * Logic for pagination
   * - For start of slice, if page query are available, then multiply fixedLimit value with (fixedPage value - 1). Otherwise, 0.
   * - For end of slice, if page query are available, then multiply fixedLimit value with fixedPage value. Otherwise, fixedLimit.
   */
  const results = data.slice(
    page ? fixedLimit * (fixedPage - 1) : 0,
    page ? fixedLimit * fixedPage : fixedLimit
  );

  return results;
}
