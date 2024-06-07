import React from "react";

function Statistic({ title, value, message }) {
    return (
        <div>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">{title}</div>
                    <div className="stat-value">{value}</div>
                    <div className="stat-desc">{message}</div>
                </div>
            </div>
        </div>
    );
}

export default Statistic;
