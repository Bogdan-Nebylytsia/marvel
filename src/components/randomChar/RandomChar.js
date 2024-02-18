import { useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelSevice';
import ErrorMassage from '../errorMassage/ErrorMassage';
import Spinner from '../spinner/Spinner';
import mjolnir from '../../resources/img/mjolnir.png';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './randomChar.scss';

const RandomChar = () => {

   const [char, setChar] = useState({});

   const { loading, error, clearError, getCharacter } = useMarvelService();

   useEffect(() => {
      updateChar();
      // eslint-disable-next-line
   }, [])

   const onCharLoaded = (char) => {
      setChar(char);
   }

   const updateChar = () => {
      clearError();
      const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

      getCharacter(id)
         .then(onCharLoaded)
   }

   return (
      <div className="randomchar">

         <SwitchTransition>
            <CSSTransition
               key={!(error || loading || !char) ? "content" : loading ? "spinner" : "error"}
               timeout={450}
               classNames={"fade"}>
               {!(error || loading || !char) ? <RandomCharBlock char={char} /> : loading ? <Spinner /> : <ErrorMassage />}
            </CSSTransition>
         </SwitchTransition>



         <div className="randomchar__static">
            <p className="randomchar__title">
               Random character for today! <br />
               Do you want to get to know him better?
            </p>
            <p className="randomchar__title">
               Or choose another one
            </p>
            <button className="button button__main" onClick={updateChar}>
               <div className="inner">try it</div>
            </button>
            <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
         </div>
      </div>
   )

}

const RandomCharBlock = ({ char }) => {

   const { name, description, thumbnail, homepage, wiki } = char;

   let imgClass = "randomchar__img";
   if (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
      imgClass = "randomchar__img-not-available";
   }
   return (
      <div className="randomchar__block">
         <img src={thumbnail} alt="Random character" className={imgClass} />
         <div className="randomchar__info">
            <p className="randomchar__name">{name && name.length > 20 ? `${char.name.substring(0, 20)}...` : name}</p>
            <p className="randomchar__descr">
               {description}
            </p>
            <div className="randomchar__btns">
               <a href={homepage} className="button button__main">
                  <div className="inner">homepage</div>
               </a>
               <a href={wiki} className="button button__secondary">
                  <div className="inner">Wiki</div>
               </a>
            </div>
         </div>
      </div>
   )
}

export default RandomChar;