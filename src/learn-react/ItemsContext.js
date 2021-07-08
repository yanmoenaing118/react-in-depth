import React from "react";

const Items = React.createContext({
  items: ["love you", "hate you", "I like ice-cream"],
  deleteItem: (id) => {},
});

export default Items;
