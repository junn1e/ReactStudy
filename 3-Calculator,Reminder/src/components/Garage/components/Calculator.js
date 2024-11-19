import React, { useState } from "react";
import styles from '../modules/Calculator.module.css';

export default function Calculator() {
  const [input, setInput] = useState("");
  const [operatorOn, setOperatorOn] = useState('');
  const [previousNum, setPreviousNum] = useState('');
  
  const buttons = [
    { label: "C", type: "ac" },
    { label: "+", type: "operator" },
    { label: "-", type: "operator" },
    { label: "x", type: "operator" },
    "7", "8", "9",
    { label: "/", type: "operator" },
    "4", "5", "6",
    { label: "=", type: "result" },
    "1", "2", "3", "0"
  ];

  const calculate = (n1, operator, n2) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    switch (operator) {
      case '+': return (num1 + num2).toFixed(5).toString();
      case '-': return (num1 - num2).toFixed(5).toString();
      case 'x': return (num1 * num2).toFixed(5).toString();
      case '/': return (num1 / num2).toFixed(5).toString();
      default: return "0";
    }
  };

  const handleClick = (label, type) => {
    if (type === "ac") {
      setInput("");
      setOperatorOn("");
      setPreviousNum("");
    } else if (type === "result") {
      if (operatorOn && previousNum) {
        setInput(calculate(previousNum, operatorOn, input));
        setPreviousNum("");
        setOperatorOn("");
      }
    } else if (type === "operator") {
      setOperatorOn(label);
      setPreviousNum(input);
      setInput("");
    } else {
      setInput(prev => (prev === "0" ? label : prev + label));
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.display}>
        <div className="input">{input || "0"}</div>
      </div>
      <div className={styles.buttons}>
        {buttons.map((btn, index) => {
          const label = typeof btn === "object" ? btn.label : btn;
          const type = typeof btn === "object" ? btn.type : "num";
          return (
            <button
              key={index}
              className={`${styles.button} ${styles[type]}`}
              onClick={() => handleClick(label, type)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
