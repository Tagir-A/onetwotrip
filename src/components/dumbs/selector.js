import React from 'react'

function Selector({ onChange, filters}) {
    return (
        <select id="selector" onChange={onChange}>
            {filters.map((item,i) =>
                <option
                    key={i}
                    value={item}
                >
                {item}
                </option>
            )}
        </select>
    )
}