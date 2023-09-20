import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent
}) => {
    return (
        <>
            {items.map((item) => (
                <ItemComponent key={uuidv4()} {...{ [resourceName]: item }} />
            ))}
        </>
    )
}

export default RegularList
