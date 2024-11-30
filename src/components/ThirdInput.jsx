import { useDispatch, useSelector } from "react-redux";
import { prevStep } from "../feautures/formSlice";

function ThirdInput() {
  const dispatch = useDispatch();
  const handleBack = (e) => {
    e.preventDefault();
    dispatch(prevStep());
  };
  const firstData = useSelector((state) => state.form.firstData);
  const secondData = useSelector((state) => state.form.secondData);

  return (
    <div>
      <div className="flex  px-10 py-20 text-left">
        <div className="flex ">
          <div>
            {Object.keys(firstData).map((key) => (
              <div className="pr-7 py-2 font-bold">{key}:</div>
            ))}
          </div>
          <div>
            {Object.values(firstData).map((value) => (
              <div className="w-72 py-2"> {value}</div>
            ))}
          </div>
        </div>
        <div className=" flex ">
          <div>
            {Object.keys(secondData).map((key) => (
              <div className="pr-7 py-2  font-bold p">{key}:</div>
            ))}
          </div>
          <div>
            {Object.values(secondData).map((value) => (
              <div className="w-72 py-2"> {value}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-60 mt-10">
        <div className="bg-black py-2 px-5 rounded-md duration-500 hover:bg-slate-700 font-bold text-white">
          <button onClick={handleBack}>Back</button>
        </div>
        <div>
          <button className="bg-red-600 hover:bg-red-500 duration-500 hover:text-black py-2 px-5 rounded-md font-bold text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdInput;
