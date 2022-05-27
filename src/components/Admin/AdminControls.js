import React from "react";

import styles from "./AdminControls.module.css";

const AdminControls = () => {
   const blz = (
      <div className={styles.container}>
         <button className={styles.btn}>Edit Meal</button>
         <button className={`${styles.btn} ${styles.danger}`}>
            Delete Meal
         </button>
      </div>
   );
   return blz;
   //    return <div>AdminControls</div>;
};

export default AdminControls;
