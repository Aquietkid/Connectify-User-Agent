import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { authenticate } from '../api/user'
import { setUser } from '../app/userSlice'

const PrivateRoute = ({ children }) => {
  const user = useSelector(state => state.user)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (!user._id) {
        setLoading(true);
        const res = await authenticate();
        dispatch(setUser(res.data))
      }
      setLoading(false);
    })()
  }, [])

  if (loading) {
    return <p>Authenticating...</p>
  }

  return user._id ? children : <Navigate to="/signin" />
}

export default PrivateRoute