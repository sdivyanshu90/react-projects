import React from "react";
import styles from './recipe.module.css'

const Recipe = ({title, calorie, image, time, ingredients}) => {
    return (
        <div className={styles.recipe}>
            <h1>{title}</h1>
            <h4>Total calorie: {Math.round(calorie)}</h4>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h4>Total time required to prepare: {time}</h4>
            <img className={styles.image} src={image} alt={title} />
        </div>
    )
}


export default Recipe;