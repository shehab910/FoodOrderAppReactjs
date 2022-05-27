import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AddMeal from "../components/Admin/AddMeal";
import useForceUpdate from "../components/custom-hooks/useForceUpdate";
import AvailableMeals from "../components/Meals/AvailableMeals";

import adminControlStyles from "../components/Admin/AdminControls.module.css";
import { meals } from "../components/Meals/AvailableMeals.module.css";
import Card from "../components/UI/Card";

const AdminPanel = () => {
   const hasToken = localStorage.getItem("token");
   const [showModal, setShowModal] = useState(false);

   const onHideModal = () => setShowModal(false);

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
         <div className={meals}>
            <Card>
               <div>AdminPanel</div>
               <button
                  onClick={() => setShowModal(true)}
                  className={adminControlStyles.btn}
               >
                  Add Meal
               </button>
               {showModal && <AddMeal onHideModal={onHideModal} />}
            </Card>
         </div>
         <AvailableMeals key={value} adminControls={{ ...adminControls }} />
      </>
   );
};

export default AdminPanel;
