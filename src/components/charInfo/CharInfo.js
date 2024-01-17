import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Skeleton from '../skeleton/Skeleton';
import ErrorMassage from '../errorMassage/ErrorMassage';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../../services/MarvelSevice';
import './charInfo.scss';
import { Link } from 'react-router-dom';

const CharInfo = (props) => {
   const [char, setChar] = useState(null);

   const {loading, error, clearError, getCharacter} = useMarvelService();

   useEffect(() => {
      updateChar();
   }, [props.charId])

   const updateChar = () => {
      const { charId } = props;
      if (!charId) {
         return
      }
      clearError();

      getCharacter(charId)
         .then(setChar)
   }


      const skeleton = char || loading || error ? null : <Skeleton />;
      const spinner = loading ? <Spinner /> : null;
      const errorMassage = error ? <ErrorMassage /> : null;
      const content = !(loading || error || !char) ? <View char={char} /> : null;

      return (
         <div className="char__info">
            {skeleton}
            {spinner}
            {errorMassage}
            {content}
         </div>
      )

}

const View = ({ char }) => {
   const { name, thumbnail, description, wiki, homepage, comics } = char;

   let imgStyle = thumbnail.includes('image_not_available') ? { "objectFit": "unset" } : { "objectFit": "cover" };

   const renderComics = (length, arr) => {
      if (!arr.length) return 'There are no comics here yet...'

      if (length === 'all') {
         return (
            arr.map((item, i) => {
               const comicId = item.resourceURI.slice(43);
               return (
                  <Link to={`/comic/${comicId}`} key={i} className="char__comics-item">
                     {item.name}
                  </Link>
               )
            })
         )
      } else {
         return (
            arr.slice(0, length).map((item, i) => {
               const comicId = item.resourceURI.slice(43);
               return (
                  <Link to={`/comics/${comicId}`} key={i} className="char__comics-item">
                     {item.name}
                  </Link>
               )
            })
         )
      }
   }

   return (
      <>
         <div className="char__basics">
            <img src={thumbnail} alt={name} style={imgStyle} />
            <div>
               <div className="char__info-name">{name}</div>
               <div className="char__btns">
                  <a href={homepage} className="button button__main">
                     <div className="inner">homepage</div>
                  </a>
                  <a href={wiki} className="button button__secondary">
                     <div className="inner">Wiki</div>
                  </a>
               </div>
            </div>
         </div>
         <div className="char__descr">
            {description}
         </div>
         <div className="char__comics">Comics:</div>
         <ul className="char__comics-list">
            {renderComics(10, comics)}
         </ul>
      </>
   )
}

CharInfo.propTypes = {
   charId: PropTypes.number
}

export default CharInfo;