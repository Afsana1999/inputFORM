import { useDispatch } from "react-redux";
import React from "react";
import { nextStep } from "../feautures/formSlice";

function FirstInput() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextStep());
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="flex  p-10">
        <div className="input-content">
          <div>
            <label className="mr-[59px]">Name</label>
            <input type="text" className="border w-96 px-2 mx-40" />
          </div>
          <div>
            <label className="mr-[62px]">Email</label>
            <input type="email" className="border w-96 px-2 mx-40" />
          </div>
          <div>
            <label>Mobil number</label>
            <input
              type="number"
              className="border w-96 px-2 mx-40"
              name=""
              id=""
            />
          </div>
          <div>
            <label>Mobil number</label>
            <input
              type="number"
              className="border w-96 px-2 mx-40"
              name=""
              id=""
            />
          </div>
          <div>
            <label>Address line 2</label>
            <input type="text" className="border w-96 px-2 mx-40" />
          </div>
          <div>
            <label>Address line 3</label>
            <input type="text" className="border w-96 px-2 mx-40" />
          </div>
        </div>
        <div className="w-[40%] text-right content-center ">
          <input
            type="submit"
            className="bg-red-600 py-3 px-8 rounded-lg text-white font-semibold duration-500 hover:text-black hover:bg-red-500 "
          />
        </div>
      </form>
    </div>
  );
}

export default FirstInput;
