import { useState } from "react";

export default function useForceUpdate() {
   const [value, setValue] = useState(0); // integer state
   if (value === Infinity) {
      setValue(0);
   }
   return { forceUpdate: () => setValue((value) => value + 1), value }; // update the state to force render
}
