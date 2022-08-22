import React from "react";
import { useVolunteersContext } from "../hooks/useVolunteersContext";
//import { Volunteers } from "./Volunteers";

// components
import EditVolunteerForm from "../components/EditVolunteerForm";

const EditVolunteer = () => {
  const volunteer = useVolunteersContext();

  return (
    <div>
      <EditVolunteerForm key={volunteer._id} volunteer={volunteer} />
    </div>
  );
};

export default EditVolunteer;
