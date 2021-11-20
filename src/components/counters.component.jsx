import React from "react";
import Counter from "./Counter.component";
import { useSelector } from "react-redux";

export default function Counters() {
    const counters = useSelector((state) => state.countersState.counters);
    return counters.map((counters) => {
        return (
            <Counter
                key={counters.id}
                value={counters.value}
                id={counters.id}
            />
        );
    });
}
