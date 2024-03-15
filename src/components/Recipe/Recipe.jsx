import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleWantToCook}) => {

    const { recipe_name, preparing_time, calories, short_description, ingredients, recipe_image } = recipe;

    return (
        <div className="card bg-base-100 border border-[#28282833] p-4 space-y-3">
                <img className='rounded-2xl h-60 object-cover' src={recipe_image} alt="food" />
            <div className="card-body p-0 space-y-3">
                <h2 className="card-title">{recipe_name}</h2>
                <p className='text-[#878787]'>{short_description}</p>

                <div className='border-y border-[#2828281A] py-5'>
                    <h1 className='font-semibold text-lg mb-5'>Ingredients: {ingredients.length}</h1>
                    <ul>
                    {
                        ingredients.map((ingredient, idx) => <li className='text-[#878787]' key={idx}>{ingredient}</li>)
                    }
                    </ul>
                </div>
                <div className='flex justify-between'>
                    <p className='flex gap-2 items-center'><CiClock2 />{preparing_time} minutes</p>
                    < p className='flex gap-2 items-center'><AiOutlineFire />{calories} calories</p>
                </div>

                <div className="card-actions">
                    <button onClick={() => handleWantToCook(recipe)} className="btn bg-red-500 hover:bg-red-600 px-5 text-white text-lg rounded-full">Want to Cook</button>
                </div>


            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func.isRequired
}
export default Recipe;