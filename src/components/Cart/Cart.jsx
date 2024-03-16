import PropTypes from 'prop-types';

const Cart = ({ carts, handlePreparing, preparing, totalTime, totalCalories }) => {
    return (
        <div className='border border-[#28282833] rounded-2xl'>

            <table className='w-full'>
                <caption className='text-xl md:text-2xl font-bold my-4'>
                    <span className='px-14 border-b pb-4 border-[#28282833]'>Want to cook: {carts.length}</span>
                </caption>
                <thead className='thead'>
                    <tr>
                        <th></th>
                        <th className='py-5'>Name</th>
                        <th className='py-5'>Time</th>
                        <th className='py-5'>Calories</th>
                    </tr>
                </thead>
                <tbody className='tbody'>

                    {
                        carts.map((cart, idx) => {
                            const { recipe_name, preparing_time, calories, recipe_id } = cart;

                            return (
                                <tr key={cart.recipe_id} className='tr bg-[#28282808] border-b'>
                                    <td className='td p-3'>{idx + 1}</td>
                                    
                                    <td className='td'>{recipe_name}</td>

                                    <td className='td p-5'>{preparing_time} minutes</td>

                                    <td className='td'>{calories} calories</td>


                                    <td className='td'>
                                        <button onClick={() => handlePreparing(recipe_id, cart)} className='preparing-btn btn me-0 md:me-3 text-white rounded-full bg-red-500 hover:bg-red-600 min-h-9 h-0'>Preparing</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <table className='w-full'>
                <caption className='text-xl md:text-2xl font-bold my-4'>
                    <span className='px-14 border-b pb-4 border-[#28282833]'>Currently cooking: {preparing.length}</span>
                </caption>
                <thead>
                    <tr>
                        <th></th>
                        <th className='py-5'>Name</th>
                        <th className='py-5'>Time</th>
                        <th className='py-5'>Calories</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        preparing.map((prepare, idx) => {

                            const { recipe_name, preparing_time, calories } = prepare;

                            return (
                                <tr key={idx} className='bg-[#28282808] border-b'>

                                    <td className='p-3'>{idx + 1} </td>

                                    <td className='p-3'>{recipe_name}</td>

                                    <td className='p-5'>{preparing_time} minutes</td>

                                    <td className='pr-5'>{calories} calories</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td colSpan={2} className='total py-5 px-2'>Total Time = {totalTime} minutes</td>
                        <td colSpan={2} className='total py-5 px-2'>Total Calories = {totalCalories} calories</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

Cart.propTypes = {
    carts: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func.isRequired,
    preparing: PropTypes.array,
    totalTime: PropTypes.number,
    totalCalories: PropTypes.number
}
export default Cart;