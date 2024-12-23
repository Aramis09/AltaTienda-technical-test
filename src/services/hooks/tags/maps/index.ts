//* useGetTagsMap */

export const mapGetTags = (apiResponse: Tag[]) => apiResponse.map((tag) => ({
  id: tag.id ?? undefined,
  title: tag.title ?? undefined,
  value: tag.value ?? undefined
}))
