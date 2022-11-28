import { useState } from "react";
import useInput from "./util/useInput";
import Input from "./component/Input";
import "./styles.css";

export default function App() {
  //input에 들어가는 상태값 및 로직을 custom hook으로 만들어봅니다.
  //until 폴더의 useInput.js 파일이 만들어져 있습니다.
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [nameArr, setNameArr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameArr([...nameArr, `${firstNameValue} ${lastNameValue}`]);
    setFirstNameValue('');
    setLastNameValue('');
  };

  return (
    <div className="App">
      <h1>Name List</h1>
      <div className="name-form">
        <form onSubmit={handleSubmit}>
          <div className="name-input">
            <label>성</label>
            <input
              value={firstNameValue}
              onChange={(e) => setFirstNameValue(e.target.value)}
              type="text"
            />
          </div>
          <div className="name-input">
            <label>이름</label>
            <input
              value={lastNameValue}
              onChange={(e) => setLastNameValue(e.target.value)}
              type="text"
            />
          </div>
          <button>제출</button>
        </form>
      </div>
      <div className="name-list-wrap">
        <div className="name-list">
          {nameArr.map((el, idx) => {
            return <p key={idx}>{el}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
