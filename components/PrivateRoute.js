import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {useAuth} from '../pages/contexts/AuthProvider.js'
//import FullPageLoader from './FullPageLoader';
 
export default function privateRoute({ publicroutes, children }) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  console.log("sdfsdfsd")
  // if url is not in public routes, then it is protected
  const pathIsProtected = !publicroutes.includes(router.pathname);
 
  console.log("Protected Path: ", pathIsProtected)
  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathIsProtected) {
      // Redirect route, you can point this to /login
      router.push('/');
    }
  }, [isLoading, isAuthenticated, pathIsProtected]);
 
  if ((isLoading || !isAuthenticated) && pathIsProtected) {
    //return <FullPageLoader />;  THIS CAN BE USED TO SHOW A LOADING SCREEN
    return (<h1>loading...</h1>)
  }
 
  return children;
}