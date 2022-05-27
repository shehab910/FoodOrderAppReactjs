import React from "react";
import AddMeal from "../components/Admin/AddMeal";
import AvailableMeals from "../components/Meals/AvailableMeals";

const AdminPanel = () => {
   const dev = <div>blez</div>;
   return (
      <>
         <div>AdminPanel</div>
         <AddMeal />
         <AvailableMeals ShowAdminControls={true} />
      </>
   );
};

export default AdminPanel;
