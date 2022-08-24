import { createContext, useReducer } from 'react';

export const OpportunityContext = createContext();

export const opportunityReducer = (state, action) => {
  switch (action.type) {
    case 'SET_OPPORTUNITIES':
      return {
        opportunities: action.payload,
      };
    case 'CREATE_OPPORTUNITIES': 
      return {
        opportunities: [action.payload, ...state.opportunities],
      };
    case 'DELETE_OPPORTUNITIES':
      return {
        opportunities: state.opportunities.filter((v) => v._id !== action.payload._id),
      };
    default: 
      return state;
  }
}

export const OpportunityProvider = ({ children }) => {
  const [state, dispatch] = useReducer(opportunityReducer, {
    opportunities: null,
  });

  return (
    <OpportunityContext.Provider value={{ ...state, dispatch }}>
      {children}
    </OpportunityContext.Provider>
  );
}