import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector(state => state.user)
  return isAuthenticated ? children : <Navigate to="/signin" />
}

export default PrivateRoute