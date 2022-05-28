import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AddEditMeal from "../components/Admin/AddEditMeal";
import useForceUpdate from "../components/custom-hooks/useForceUpdate";
import AvailableMeals from "../components/Meals/AvailableMeals";
import Card from "../components/UI/Card";
import { deleteMeal, addMeal, editMeal } from "../services/meals/mealServices";

import adminControlStyles from "../components/Admin/AdminControls.module.css";
import { meals } from "../components/Meals/AvailableMeals.module.css";

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

   const onDeleteHandler = async (e, id) => {
      e.preventDefault();
      console.log(hasToken);
      await deleteMeal(id, hasToken);
      forceUpdate();
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

   const onMealSubmitHandler = async (e, newMeal) => {
      e.preventDefault();
      if (isEdit) {
         await editMeal(newMeal?.id, newMeal, hasToken);
      } else {
         console.log("adminpanel ");
         console.log(newMeal);
         await addMeal(newMeal, hasToken);
      }
      setShowModal(false);
      forceUpdate();
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
                     onMealSubmit={onMealSubmitHandler}
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
