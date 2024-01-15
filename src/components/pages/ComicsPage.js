import ComicsList from '../comicsList/ComicsList';
import AppBunner from '../appBunner/AppBunner';
import { Outlet, useOutlet } from 'react-router-dom';

const ComicsPage = () => {
   const outlet = useOutlet();

   return (
      <>
         <AppBunner />
         {outlet ? <Outlet/> : <ComicsList />}
      </>
   )
}

export default ComicsPage;