export function handlePagination<T>(
  obj: {
    data: T[];
    page?: string;
    limit?: string;
  },
) {
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
    page ? fixedLimit * fixedPage : fixedLimit,
  );

  return results;
}
