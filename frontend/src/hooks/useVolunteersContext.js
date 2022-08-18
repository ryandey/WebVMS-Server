import { useContext } from 'react';
import { VolunteersContext } from '../context/VolunteersContext';

export const useVolunteersContext = () => {
  const context = useContext(VolunteersContext);

  if (!context) {
    throw Error('useVolunteersContext must be used within a VolunteersProvider');
  }

  return context;
}