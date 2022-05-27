import { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const apiLink = "/api/meals/";

const AvailableMeals = ({ ShowAdminControls }) => {
   const [meals, setMeals] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [httpError, setHttpError] = useState();

   useEffect(() => {
      const fetchMeals = async () => {
         const response = await fetch(apiLink);
         const data = await response.json();
         console.log(data);

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
      <MealItem
         key={meal.id}
         meal={meal}
         ShowAdminControls={ShowAdminControls}
      />
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
