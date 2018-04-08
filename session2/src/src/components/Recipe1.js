const Recipe = ({ name, ingredients, steps }) =>
	<section id="baked-salmon">
		<h1>{name}</h1>
		<ul className="ingredients">
			{ingredients.map((ingredient, i) =>
				<li key={i}>{ingredient.name}</li>
			)}
		</ul>
		<section className="instructions">
			<h2>Cooking Instructions</h2>
			{steps.map((step, i) =>
				<p key={i}>{step}</p>
			)}
		</section>
	</section>