import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import loki from '../../resources/img/loki.jpg';
import adam_walrock from '../../resources/img/adam_walrock.jpg';
import boom_boom from '../../resources/img/boom-boom.jpg';
import calypso from '../../resources/img/calypso.jpg';
import collen_wing from '../../resources/img/collen_wing.jpg';
import daimon__hellstorm from '../../resources/img/daimon__hellstorm.jpg';
import damage_control from '../../resources/img/damage_control.jpg';
import hulk from '../../resources/img/hulk.jpg';

const CharList = () => {
   return (
      <div className="char__list">
         <ul className="char__grid">
            <li className="char__item">
               <img src={abyss} alt="abyss" />
               <div className="char__name">ABYSS</div>
            </li>
            <li className="char__item char__item_selected">
               <img src={loki} alt="loki" />
               <div className="char__name">LOKI</div>
            </li>
            <li className="char__item">
               <img src={adam_walrock} alt="Adam Warlock" />
               <div className="char__name">Adam Warlock</div>
            </li>
            <li className="char__item">
               <img src={boom_boom} alt="Boom Boom" />
               <div className="char__name">Boom Boom</div>
            </li>
            <li className="char__item">
               <img src={calypso} alt="Calypso" />
               <div className="char__name">Calypso</div>
            </li>
            <li className="char__item">
               <img src={collen_wing} alt="Colleen Wing" />
               <div className="char__name">Colleen Wing</div>
            </li>
            <li className="char__item">
               <img src={daimon__hellstorm} alt="Daimon Hellstrom" />
               <div className="char__name">Daimon Hellstrom</div>
            </li>
            <li className="char__item">
               <img src={damage_control} alt="Damage Control" />
               <div className="char__name">Damage Control</div>
            </li>
            <li className="char__item">
               <img src={hulk} alt="hulk" />
               <div className="char__name">HULK</div>
            </li>
         </ul>
         <button className="button button__main button__long">
            <div className="inner">LOAD MORE</div>
         </button>
      </div>
   )
}

export default CharList;