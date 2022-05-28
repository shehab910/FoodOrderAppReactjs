import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AddEditMeal from "../components/Admin/AddEditMeal";
import useForceUpdate from "../components/custom-hooks/useForceUpdate";
import AvailableMeals from "../components/Meals/AvailableMeals";

import adminControlStyles from "../components/Admin/AdminControls.module.css";
import { meals } from "../components/Meals/AvailableMeals.module.css";
import Card from "../components/UI/Card";

const AdminPanel = () => {
   const hasToken = localStorage.getItem("token");
   const [showModal, setShowModal] = useState(false);
   const [isEdit, setIsEdit] = useState(false);
   const [mealToEdit, setMealToEdit] = useState(null);

   const onHideModal = () => setShowModal(false);

   const nav = useNavigate();
   const { forceUpdate, value: forceUpdateValue } = useForceUpdate();

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

   const onEditHandler = (e, meal) => {
      e.preventDefault();
      setIsEdit(true);
      setShowModal(true);
      setMealToEdit(meal);
      console.log(meal);
   };

   const onAddMealHandler = () => {
      setIsEdit(false);
      setShowModal(true);
   };

   const adminControls = {
      onDeleteHandler,
      onEditHandler,
      showAdminControls: true,
   };
   return (
      <>
         <div className={meals}>
            <Card>
               <div>AdminPanel</div>
               <button
                  onClick={onAddMealHandler}
                  className={adminControlStyles.btn}
               >
                  Add Meal
               </button>
               {showModal && (
                  <AddEditMeal
                     onHideModal={onHideModal}
                     isEdit={isEdit}
                     meal={mealToEdit}
                  />
               )}
            </Card>
         </div>
         <AvailableMeals
            key={forceUpdateValue}
            adminControls={{ ...adminControls }}
         />
      </>
   );
};

export default AdminPanel;
