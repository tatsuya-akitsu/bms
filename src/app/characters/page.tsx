import { fetchCharacters } from '@/api/microcms'
import CharactersTemplate from '@/components/templates/characters';

const Characters = async () => {
  const response = await fetchCharacters()
  return (
    <>
      <CharactersTemplate characters={response} />
    </>
  );
}

export default Characters
