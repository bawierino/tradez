import React from "react";
import { allCards } from "./data/all_cards";

const App: React.FC = () => {
    return <div>{JSON.stringify(allCards)}</div>;
};

export default App;
