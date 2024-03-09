import { Link } from "react-router-dom";
import './singleCharLayout.scss';
import AppBunner from "../../appBunner/AppBunner";

const SingleCharLayout = ({ data }) => {
   const { name, thumbnail, description } = data;

   return (
      <>
         <AppBunner />
         <div className="single-char fade-page">
            <img src={thumbnail} alt={name} className="single-char__img" />
            <div className="single-char__info">
               <h2 className="single-char__name">{name}</h2>
               <p className="single-char__descr">{description}</p>
            </div>
            <Link to={'/'} className="single-char__back">Back to all</Link>
         </div>
      </>

   )
}

export default SingleCharLayout;