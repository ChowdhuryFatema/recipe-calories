import PropTypes from 'prop-types';

const Cart = ({ carts, handlePreparing}) => {
    return (
        <div className='border border-[#28282833] rounded-2xl'>

            <table className='w-full'>
                <caption className='text-xl md:text-2xl font-bold my-4'>
                <span className='px-14 border-b pb-4 border-[#28282833]'>Want to cook: {carts.length}</span>
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
                    carts.map((cart, idx) => {
                        const {recipe_name, preparing_time, calories, recipe_id} = cart;

                        return (
                            <tr key={cart.recipe_id} className='bg-[#28282808] border-b'>
                                <td className='p-3'>{idx+1}</td>
                                <td>{recipe_name}</td>
                                <td className='p-5'>{preparing_time} minutes</td>
                                <td>{calories} calories</td>
                                <td>


                                <button onClick={() => handlePreparing(recipe_id)} className='btn me-0 md:me-3 text-white rounded-full bg-red-500 hover:bg-red-600 min-h-9 h-0'>Preparing</button>
                                </td>
                            </tr>
                        )
                    })
                   }

                    

                </tbody>

            </table>


            <table className='w-full'>
                <caption className='text-xl md:text-2xl font-bold my-4'>
                <span className='px-14 border-b pb-4 border-[#28282833]'>Currently cooking: 02</span>
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

                    <tr className='bg-[#28282808] border-b'>
                        <td className='p-3'></td>
                        <td></td>
                        <td className='p-5'> minutes</td>
                        <td className='pr-5'> calories</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td className='py-5 px-2'>Total Time = 45 minutes</td>
                        <td className='py-5 px-2'>Total Calories = 1050 calories</td>
                    </tr>

                </tbody>

            </table>
            

        </div>
    );
};

Cart.propTypes = {
    carts: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func
}
export default Cart;