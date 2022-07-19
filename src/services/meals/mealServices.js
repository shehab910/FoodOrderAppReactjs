const mealsUrl = `${process.env.REACT_APP_API_URL}/meals/`;

export const addMeal = async (meal, hasToken) => {
   if (meal.hasOwnProperty("id")) {
      delete meal.id;
   }
   const response = await fetch(mealsUrl, {
      method: "POST",
      //add bear token
      body: JSON.stringify(meal),
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${hasToken}`,
      },
   });
   return response;
   // console.log(response);
};

export const editMeal = async (id, meal, hasToken) => {
   if (meal.hasOwnProperty("id")) {
      delete meal.id;
   }
   const response = await fetch(`${mealsUrl}${id}/`, {
      method: "PUT",
      //add bear token
      body: JSON.stringify(meal),
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${hasToken}`,
      },
   });
   return response;
   // console.log(response);
};

export const deleteMeal = async (id, hasToken) => {
   const response = await fetch(`${mealsUrl}${id}/`, {
      method: "DELETE",
      //add bear token

      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${hasToken}`,
      },
   });
   return response;
   // console.log(response);
};
