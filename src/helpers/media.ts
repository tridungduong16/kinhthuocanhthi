export const media = (url: string | undefined) => {
  /*
   * If received a relative url returns formatted absolute URL to media files
   * If received an absolute url returns the same url
   * Returns base url if receive nothing
   * */
  let baseUrl = import.meta.env.VITE_PUBLIC_STATICS_URL ?? ''

  if (!baseUrl.match(/\/$/)) {
    // Append slash
    baseUrl += '/'
  }

  if (!url) {
    return baseUrl
  }

  if (url.startsWith('http')) {
    return url
  }

  let newUrl = url

  if (newUrl.match(/^\//)) {
    // Remove '/' at position [0]
    newUrl = newUrl?.slice(1)
  }

  return `${baseUrl}${newUrl}`
}
