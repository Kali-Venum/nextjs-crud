import React from "react";

const Button = (props) => {
  return (
    <div className="flex float-right mr-[20%] mt-7">
      <button
        type="submit"
        class="text-white bg-blue-700 p-3 rounded"
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default Button;

// absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-70 dark:focus:ring-blue-800