import React, { useState } from 'react';
const ImageInput = ({searchText}) => {
    const [text, setText] = useState('')

const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
}
    return (
        <div className=" px-10 py-12 w-1/2 px-10 py-10  mx-auto">

            <label className="ml-1 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Search Image</label>
            <form className="w-full max-w-md m-1" onSubmit={onSubmit}>
                <input class="w-full bg-gray-100 rounded border border-gray-400 
          focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                    placeholder="like dogs" type="text"
                    onChange={(e) => setText(e.target.value)} />

                <div classNameName="p-2 w-full">
                    <button class="flex ml-40 mt-5 text-white bg-indigo-500 border-0 py-2 px-8 
                    focus:outline-none hover:bg-indigo-600 rounded text-lg ">Search</button>
                </div>
            </form>
        </div>
    )
}

export default ImageInput;