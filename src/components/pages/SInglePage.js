import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelSevice';
import setContent from '../../utils/setContent';

import { useParams } from 'react-router-dom';

const SinglePage = ({Component, identifier }) => {
   const { Id } = useParams();
   const [data, setData] = useState({});

   const {process, setProcess, clearError, getComic, getCharacter } = useMarvelService();

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
               .then(onDataLoaded).then(() => setProcess('confirmed'));
            break;

         case "char":
            getCharacter(Id)
               .then(onDataLoaded).then(() => setProcess('confirmed'));
            break;
         
         default:
            break;
      }
   }

   const onDataLoaded = (data) => {
      setData(data);
   }

   return (
      <div className='fade-page'>
         {setContent(process, Component, data)}
      </div>
   )
}

export default SinglePage;