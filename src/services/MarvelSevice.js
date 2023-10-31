

class MarvelService {
   _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   _apiKey = 'apikey=6fd4c27ab8f0c4a825d883b3b3700407';
   getResource = async (url) => {
      let res = await fetch(url);

      if (!res.ok) {
         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      return await res.json();
   }
   getAllCharacters = async () => {
      const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=205&${this._apiKey}`);

      return res.data.results.map(this._transformCharacter);
   }

   getCharacter = async (id) => {
      const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);

      return this._transformCharacter(res.data.results[0]);
   }

   _transformCharacter = (char) => {
      const charDescr = char.description ? (char.description.length > 210 ? `${char.description.substring(0, 210)}...` :
         char.description) : "Unfortunately, there is no description about this character...";

      return ({
         id: char.id,
         name: char.name.length > 20 ? `${char.name.substring(0,20)}...` : char.name,
         description: charDescr,
         thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
         homepage: char.urls[0].url,
         wiki: char.urls[1].url
      })
   }
}

export default MarvelService;