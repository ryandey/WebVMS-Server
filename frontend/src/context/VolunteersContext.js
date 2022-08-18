import { createContext, useReducer } from 'react';

export const VolunteersContext = createContext();

export const volunteersReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VOLUNTEERS':
      return {
        volunteers: action.payload,
      };
    case 'CREATE_VOLUNTEERS': 
      return {
        volunteers: [action.payload, ...state.volunteers],
      };
    case 'DELETE_VOLUNTEERS':
      return {
        volunteers: state.volunteers.filter((v) => v._id !== action.payload._id),
      };
    default: 
      return state;
  }
}

export const VolunteersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(volunteersReducer, {
    volunteers: null,
  });

  return (
    <VolunteersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </VolunteersContext.Provider>
  );
}