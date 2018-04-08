import Ingredient from './Ingredient'

const IngredientsList = ({ list }) =>
	<ul className="ingredients">
		{list.map((ingredient, i) =>
			<Ingredient key={i} {...ingredient} />
		)}
	</ul>

export default IngredientsList

{/* <Ingredient amount={ingredient.amount}
measurement={ingredient.measurement}
name={ingredient.name} /> */}