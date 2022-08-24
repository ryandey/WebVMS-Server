import { useContext } from 'react';
import { OpportunityContext } from '../context/OpportunityContext';

export const useOpportunityContext = () => {
  const context = useContext(OpportunityContext);

  if (!context) {
    throw Error('useOpportunityContext must be used within a OpportunityProvider');
  }

  return context;
}