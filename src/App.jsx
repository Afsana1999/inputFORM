import Form from "./components/Form";
import "./index.css";
import "./App.css";
import { firstStep, secondStep, thirdStep } from "./feautures/formSlice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  const handleOneStep = () => {
    dispatch(firstStep());
  };

  const handleTwoStep = () => {
    dispatch(secondStep());
  };
  const handleThreeStep = () => {
    dispatch(thirdStep());
  };
  return (
    <div>
      <div className="text-white text-6xl font-bold text-left pb-10">
        Personal info page
      </div>
      <div className="bg-white h-[700px] text-center ">
        <div className="text-2xl text-left py-10 px-10">Personal info</div>
        <div className="progressbar ">
          <div className="progress-steps">
            <div className="wrapper-circle wrapper-circle-active">
              <input
                type="reset"
                onClick={handleOneStep}
                className="progress-circle "
                value="1"
              />
            </div>
            <p className="progress-content">Step1</p>
          </div>
          <div className="progress-steps progress-line  "></div>
          <div className="progress-steps">
            <div className="wrapper-circle ">
              <input
                type="reset"
                onClick={handleTwoStep}
                className="progress-circle "
                value="2"
              />
            </div>
            <p className="progress-content">Step2</p>
          </div>
          <div className="progress-steps progress-line "></div>
          <div className="progress-steps">
            <div className="wrapper-circle ">
              <input
                type="reset"
                onClick={handleThreeStep}
                className="progress-circle "
                value="3"
              />
            </div>
            <p className="progress-content">Step3</p>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
