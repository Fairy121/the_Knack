import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation,Navigate } from 'react-router-dom';
import { auth } from '../../Firebase/firebaseConfig';

function ProtectedRoute(props) {
  const [user,loading] = useAuthState(auth);
  let location = useLocation();


  if(!user && !loading) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return props.children; 
}

export default ProtectedRoute