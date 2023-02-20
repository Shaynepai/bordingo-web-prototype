import React from 'react'

const IconArea = () => {
    return (
        <div className="p-2 overflow-hidden">

            <div className=" flex gap-2 justify-center"> 

            {/* Houses */}
                <div className="border border-gray-300 rounded-full p-2 shadow-md">
                    House
                </div>
            {/* Store */}
                <div className="border border-gray-300 rounded-full p-2 shadow-md">
                Store
                </div>
            {/* FoodStalls */}
                <div  className="border border-gray-300 rounded-full p-2 shadow-md">
                FoodStalls
                </div>

                {/* Churches */}
                    <div className="border border-gray-300 rounded-full p-2 shadow-md">
                    Church
                    </div>

{/* Cart */}                                                


<div className=" border border-gray-300 rounded-full p-2 shadow-md">
    Laundry
</div>


            </div>
        </div>
    )
}

export default IconArea;