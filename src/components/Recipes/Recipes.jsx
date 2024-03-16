import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {

     const [recipes, setRecipes] = useState([]);
     const [carts, setCarts] = useState([]);
     const [preparing, setPreparing] = useState([]);
     const [totalTime, setTotalTime] = useState(0);
     const [totalCalories, setCalories] = useState(0);

     useEffect(() => {
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, []);

    const handleWantToCook = cart => {
        const isExists = carts.find(c => c.recipe_id == cart.recipe_id)
        if(!isExists){
            setCarts([...carts, cart])
            toast.success("Successfully Added")
        }
        else{
            toast.warn("Already exist")
        }
    }

    const handlePreparing = (id, prepare) => {
        const newCart = carts.filter(cart => cart.recipe_id !== id)
        setCarts(newCart)
        toast.success("Added For Preparing")
        setPreparing([...preparing, prepare])

        const prepareingTime  = parseInt(prepare.preparing_time);
        setTotalTime(totalTime + prepareingTime)
        const caloriesNum = parseInt(prepare.calories)
        setCalories(totalCalories + caloriesNum)
    }

    return (
        <div className="container mx-auto max-w-[1180px] px-5">
            <div className="my-12 *:text-center space-y-5">
                <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">Our Recipes</h2>
                <p className="w-full md:w-4/5 lg:w-3/5 mx-auto text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                <div className="col-auto lg:col-span-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        recipes.map(recipe => <Recipe 
                        key={recipe.recipe_id}
                        recipe={recipe} 
                        handleWantToCook={handleWantToCook}>
                        </Recipe>)
                    }
                    </div>
                </div>
                <div className="col-auto lg:col-span-5">
                   <Cart 
                   carts={carts}  
                   handlePreparing={handlePreparing}
                   totalTime={totalTime} 
                   preparing={preparing} 
                   totalCalories={totalCalories}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Recipes;