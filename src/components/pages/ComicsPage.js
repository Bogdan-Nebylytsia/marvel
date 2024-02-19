import ComicsList from '../comicsList/ComicsList';
import AppBunner from '../appBunner/AppBunner';
import { Outlet, useOutlet } from 'react-router-dom';

const ComicsPage = () => {
   const outlet = useOutlet();

   return (
      <div className='fade-page'>
         <AppBunner />
         {outlet ? <Outlet/> : <ComicsList />}
      </div>
   )
}

export default ComicsPage;