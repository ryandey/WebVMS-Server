import { useAuthContext } from './useAuthContext'
import { useVolunteersContext } from './useVolunteersContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchVolunteers } = useVolunteersContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchVolunteers({ type: 'SET_VOLUNTEERS', payload: null })
  }

  return { logout }
}