import { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const mealsUrl = `${process.env.REACT_APP_API_URL}/meals/`;

const AvailableMeals = ({ adminControls }) => {
   const [meals, setMeals] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [httpError, setHttpError] = useState();

   useEffect(() => {
      const fetchMeals = async () => {
         const response = await fetch(mealsUrl);
         const data = await response.json();
         // console.log(data);

         if (!response.ok) {
            throw new Error("Something went wrong...");
         }

         const loadedMeals = [];
         for (const key in data) {
            loadedMeals.push({
               id: data[key]._id,
               name: data[key].name,
               description: data[key].description,
               price: data[key].price,
            });
         }
         setMeals(loadedMeals);
         setIsLoading(false);
      };

      fetchMeals().catch((error) => {
         setIsLoading(false);
         setHttpError(error.message);
      });
   }, []);

   const mealsList = meals.map((meal) => (
      <MealItem key={meal.id} meal={meal} adminControls={adminControls} />
   ));
   // meals.splice(0, meals.length); //simulating empty response
   if (isLoading) {
      return (
         <section className={styles["meals-loading"]}>
            <h2>Loading...</h2>
         </section>
      );
   }
   if (httpError) {
      return (
         <section className={styles["meals-loading"]}>
            <h2>{httpError}</h2>
         </section>
      );
   }
   if (meals.length === 0) {
      return (
         <section className={styles["meals-loading"]}>
            <h2>No Meals Found.</h2>
         </section>
      );
   }
   return (
      <section className={styles.meals}>
         <Card>
            <ul>{mealsList}</ul>
         </Card>
      </section>
   );
};

export default AvailableMeals;
