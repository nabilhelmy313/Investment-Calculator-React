import { useState } from "react";
const initUserInput={
  'current-savings':1000,
    'yearly-contribution':1200,
    'expected-return':7,
    'duration':10,
}
const UserInput = () => {
  const [userInput,setUserInput]=  useState(initUserInput)
  const SubmitHandler = (event) => {
    event.preventDefault();
  };
  const ResetHandler = () => {
    console.log("rester");
    setUserInput(initUserInput)
  };
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput)=>{
      return {
        ...prevInput,
        [input]: value
      }
    })
  };
  return (
    <>
      <form onSubmit={SubmitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("current-savings", event.target.value)
              }
              type="number"
              value={userInput['current-savings']}
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              }
              type="number"
              value={userInput['yearly-contribution']}
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) =>
                inputChangeHandler("expected-return", event.target.value)
              }
              value={userInput['expected-return']}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
              value={userInput['duration']}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={ResetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </>
  );
};
export default UserInput;
