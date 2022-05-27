import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AddMeal from "../components/Admin/AddMeal";
import useForceUpdate from "../components/custom-hooks/useForceUpdate";
import AvailableMeals from "../components/Meals/AvailableMeals";

const AdminPanel = () => {
   const hasToken = localStorage.getItem("token");
   const nav = useNavigate();
   const { forceUpdate, value } = useForceUpdate();

   useEffect(() => {
      if (!hasToken) {
         nav("/admin/login");
      }
   }, [hasToken, nav]);

   const onDeleteHandler = (e, id) => {
      e.preventDefault();
      console.log(hasToken);
      const deleteMeal = async () => {
         const response = await fetch(`/api/meals/${id}/`, {
            credentials: "include",
            method: "DELETE",
            //add bear token

            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${hasToken}`,
            },
         });
         console.log(response);
         forceUpdate();
      };
      deleteMeal();
   };

   const onEditHandler = (e, id) => {
      e.preventDefault();
   };
   const adminControls = {
      onDeleteHandler,
      onEditHandler,
      showAdminControls: true,
   };
   return (
      <>
         <div>AdminPanel</div>
         <AddMeal />
         <AvailableMeals key={value} adminControls={{ ...adminControls }} />
      </>
   );
};

export default AdminPanel;
