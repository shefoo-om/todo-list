import React from 'react'
import CategorySelect from './CategorySelect';

function AddTask() {
    return (
        <div className="AddTask">
            <fieldset className="mb-[15px] flex flex-wrap items-center gap-5">
                <input
                    className="text-sky2 inline-flex items-center justify-center h-[40px] w-3/4 max-lg:w-4/6 max-md:w-full px-[10px] text-[15px] rounded-[8px] leading-none outline-none hover:scale-105 duration-300 hover:shadow-sky8 focus:shadow-sky8 shadow-3xl hover:cursor-pointer"
                    placeholder="what is the task today ?"
                />
                <CategorySelect />
                <div className="w-full text-center">
                    <button className="m-auto btn-defult hover:scale-105 transition-all" >
                        Add Task
                    </button>
                </div>
            </fieldset>
        </div>
    )
}

export default AddTask;