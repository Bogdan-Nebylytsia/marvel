import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelSevice';
import Spinner from '../spinner/Spinner';
import ErrorMassage from '../errorMassage/ErrorMassage';

import { useParams } from 'react-router-dom';
import SingleComicLayout from './singleComicLayout/SingleComicLayout';
import SingleCharLayout from './singleCharLayout/SingleCharLayout';

const SinglePage = ({ identifier }) => {
   const { Id } = useParams();
   const [data, setData] = useState({});

   const { loading, error, clearError, getComic, getCharacter } = useMarvelService();

   useEffect(() => {
      updateData();
      window.scrollTo({
         top: 90,
         behavior: "smooth",
      });
      // eslint-disable-next-line
   }, [Id])

   const updateData = () => {
      clearError();

      switch (identifier) {
         case "comic":
            getComic(Id)
               .then(onDataLoaded)
            break;

         case "char":
            getCharacter(Id)
               .then(onDataLoaded)
            break;
         
         default:
            break;
      }
   }

   const onDataLoaded = (data) => {
      setData(data);
   }

   const component = identifier === "char" ? <SingleCharLayout data={data} /> : <SingleComicLayout data={data} />;

   const errorMassage = error ? <ErrorMassage /> : null;
   const spinner = loading ? <Spinner /> : null;
   const content = !(error || loading || !data) ? component : null;

   return (
      <div className='fade-page'>
         {errorMassage}
         {spinner}
         {content}
      </div>
   )
}

export default SinglePage;