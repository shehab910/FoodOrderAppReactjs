import React from "react";

import styles from "./AdminControls.module.css";

const AdminControls = (props) => {
   const { onDeleteHandler, onEditHandler } = props;

   return (
      <div className={styles.container}>
         <button onClick={onEditHandler} className={styles.btn}>
            Edit Meal
         </button>
         <button
            onClick={onDeleteHandler}
            className={`${styles.btn} ${styles.danger}`}
         >
            Delete Meal
         </button>
      </div>
   );
};

export default AdminControls;
