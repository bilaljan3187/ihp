import React from "react";

function Progress({ value, district }) {
    return (
        <div className="flex justify-center m-3 border p-3">
            <div className="mt-9 mr-9 ">
                <h1 className="font-bold">{district}</h1>
            </div>
            <div
                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                style={{ "--value": value }}
                role="progressbar"
            >
                {`${value} %`}
            </div>
        </div>
    );
}

export default Progress;
