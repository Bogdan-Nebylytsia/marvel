import { Component } from 'react';

import Skeleton from '../skeleton/Skeleton';
import ErrorMassage from '../errorMassage/ErrorMassage';
import Spinner from '../spinner/Spinner';
import MarvelService from '../../services/MarvelSevice';
import './charInfo.scss';

class CharInfo extends Component {
   state = {
      char: null,
      loading: false,
      error: false
   }

   marvelService = new MarvelService();

   componentDidMount() {
      this.updateChar();
   }

   componentDidUpdate(prevProps) {

      if (this.props.charId !== prevProps.charId) {
         this.updateChar();
      }
   }

   updateChar = () => {
      const { charId } = this.props;
      if (!charId) {
         return
      }
      this.offError();
      this.onCharLoading();
      this.marvelService
         .getCharacter(charId)
         .then(this.onCharLoaded)
         .catch(this.onError)
   }

   onCharLoaded = (char) => {
      this.setState({
         char,
         loading: false,
      })
   }

   onCharLoading() {
      this.setState({
         loading: true
      })
   }

   offError = () => {
      this.setState({
         error: false
      })
   }

   onError = () => {
      this.setState({
         loading: false,
         error: true
      })
   }

   render() {
      const { char, loading, error } = this.state;

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

}

const View = ({ char }) => {
   const { name, thumbnail, description, wiki, homepage, comics } = char;

   let imgStyle = thumbnail.includes('image_not_available') ? { "objectFit": "unset" } : { "objectFit": "cover" };

   const renderComics = (length, arr) => {
      if (!arr.length) return 'There are no comics here yet...'

      if (length === 'all') {
         return (
            arr.map((item, i) => {
               return (
                  <li key={i} className="char__comics-item">
                     {item.name}
                  </li>
               )
            })
         )
      } else {
         return (
            arr.slice( 0, length ).map((item, i) => {
               return (
                  <li key={i} className="char__comics-item">
                     {item.name}
                  </li>
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

export default CharInfo;