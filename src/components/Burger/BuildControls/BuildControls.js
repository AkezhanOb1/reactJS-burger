import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Meat", type: "meat"},
    {label: "Cheese", type: "cheese"}

]

const buildControls = (props) => {
    return (<div className={classes.BuildControls}>
        <p>Current Price: {props.price.toFixed(2)}</p>
        {controls.map(el => (
             <BuildControl
                 key={el.label}
                 label={el.label}
                 added={() => props.ingredientAdded(el.type)}
                 removed={() => props.ingredientRemove(el.type)}
                 disabled={props.disabled[el.type]}/>
        ))}
        <button className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>Order Now</button>
    </div>)
}

export default buildControls