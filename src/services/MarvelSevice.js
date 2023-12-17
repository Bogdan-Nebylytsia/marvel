import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
   const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   const _apiKey = 'apikey=6fd4c27ab8f0c4a825d883b3b3700407';
   const _baseOffset = 210;

   const { loading, error, clearError, request} = useHttp();
   
    const getAllCharacters = async (offset = _baseOffset) => {
      const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);

      return res.data.results.map(_transformCharacter);
   }

   const getCharacter = async (id) => {
      const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);

      return _transformCharacter(res.data.results[0]);
   }

   const _transformCharacter = (char) => {
      const charDescr = char.description ? (char.description.length > 210 ? `${char.description.substring(0, 210)}...` :
         char.description) : "Unfortunately, there is no description about this character...";

      return ({
         id: char.id,
         name: char.name,
         description: charDescr,
         thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
         homepage: char.urls[0].url,
         wiki: char.urls[1].url,
         comics: char.comics.items
      })
   }

   return {loading, error, clearError, getAllCharacters, getCharacter}
}

export default useMarvelService;