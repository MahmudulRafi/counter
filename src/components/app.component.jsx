import React from "react";
import Navbar from "./Navbar.component";
import Counters from "./Counters.component";
import ResetButton from "./ResetButton.components";
import AddNewButton from "./AddNewButton.component";
import DeleteAllButton from "./DeleteAllButton.component";

function App() {
    return (
        <>
            <Navbar />
            <AddNewButton />
            <ResetButton />
            <DeleteAllButton />
            <Counters />
        </>
    );
}

export default App;
