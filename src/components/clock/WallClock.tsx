import React, { useEffect, useState } from "react";

type PropsType = {};

export const WallClock: React.FC<PropsType> = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    // Рассчитываем углы для стрелок
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDeg = minutes * 6 + (seconds / 60) * 6;
    const secondDeg = seconds * 6;

    return (
        <div className="clock">
            {[...Array(12)].map((_, index) => (
                <div
                    key={index}
                    className="number"
                    style={{
                        transform: `rotate(${index * 30 - 90}deg) translate(85px) rotate(${-index * 30 + 90}deg)`,
                    }}
                >
                    {index === 0 ? 12 : index}
                </div>
            ))}

            {/* Стрелки */}
            <div
                className="hand hour"
                style={{ transform: `rotate(${hourDeg}deg)` }}
            ></div>
            <div
                className="hand minute"
                style={{ transform: `rotate(${minuteDeg}deg)` }}
            ></div>
            <div
                className="hand second"
                style={{ transform: `rotate(${secondDeg}deg)` }}
            ></div>
        </div>
    );
};
