export const addMeal = async (meal, hasToken) => {
   if (meal.hasOwnProperty("id")) {
      delete meal.id;
   }
   const response = await fetch(`/api/meals/`, {
      credentials: "include",
      method: "POST",
      //add bear token
      body: JSON.stringify(meal),
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${hasToken}`,
      },
   });
   console.log(response);
};

export const editMeal = async (id, meal, hasToken) => {
   if (meal.hasOwnProperty("id")) {
      delete meal.id;
   }
   const response = await fetch(`/api/meals/${id}/`, {
      credentials: "include",
      method: "PUT",
      //add bear token
      body: JSON.stringify(meal),
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${hasToken}`,
      },
   });
   console.log(response);
};

export const deleteMeal = async (id, hasToken) => {
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
};
