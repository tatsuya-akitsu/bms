export const fetchCharacters = async () => {
  const response = await fetch(`${process.env.MICROCMS_API_URL}/characters`, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'X-MICROCMS-API-KEY': `${process.env.MICROCMS_API_KEY}`
    }
  })
  const data = await response.json()
  const { contents } = data
  return contents
}
