import React, { useState } from "react";
import Navbar from "./navbar.component";
import Counters from "./counters.component";
import ResetButton from "./resetButton.components";
import AddNewButton from "./addNewButton.component";
import DeleteAllButton from "./deleteAllButton.component";

function App() {
    const [counters, setCounters] = useState([
        { id: 0, value: 0 },
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
    ]);

    const getNonZeroItems = () => {
        let countNonZero = 0;
        counters.forEach((counter) => {
            if (counter.value > 0) countNonZero++;
        });
        return countNonZero;
    };

    const handleAddNew = () => {
        const newCountersState = [
            ...counters,
            {
                id: Math.floor(Math.random() * 1000),
                value: 0,
            },
        ];

        setCounters(newCountersState);
    };

    const handleAllReset = () => {
        const allCounterReset = counters.map((counter, index) => {
            const obj = { id: index, value: 0 };
            return obj;
        });
        setCounters(allCounterReset);
    };

    const handleDeleteAll = () => {
        setCounters([]);
    };

    const handleIncrement = (id) => {
        const incrementCounters = counters.map((counter, index) => {
            if (counter.id === id)
                return { id: index, value: counter.value + 1 };
            else return counter;
        });
        setCounters(incrementCounters);
    };

    const handleDecrement = (id) => {
        const decrementCounters = counters.map((counter, index) => {
            if (counter.id === id && counter.value > 0)
                return { id: index, value: counter.value - 1 };
            else return counter;
        });
        setCounters(decrementCounters);
    };

    const handleSingleCounterReset = (id) => {
        const resetSingleCounter = counters.map((counter) => {
            if (counter.id === id) {
                return { id: id, value: 0 };
            } else return counter;
        });
        setCounters(resetSingleCounter);
    };

    const handleDelete = (id) => {
        const filteredCounters = counters.filter(
            (counter) => counter.id !== id
        );
        setCounters(filteredCounters);
    };

    return (
        <>
            <Navbar nonZeroItems={getNonZeroItems()} />
            <AddNewButton onAddNew={handleAddNew} />
            <ResetButton onAllReset={handleAllReset} />
            <DeleteAllButton onDeleteAll={handleDeleteAll} />
            <Counters
                counters={counters}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
                onSingleCounterReset={handleSingleCounterReset}
            />
        </>
    );
}

export default App;
