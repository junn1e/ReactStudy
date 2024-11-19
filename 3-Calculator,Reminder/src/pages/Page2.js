import Calculator from "../components/Garage/components/Calculator";
import ToDoList from "../components/Garage/components/ToDoList";

export default function Page2() {
  return (
    <div style={{ padding: "100px", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
      <div>
        <h3>계산기</h3>
        <Calculator />
      </div>
      <div>
        <h3>리마인더</h3>
        <ToDoList />
      </div>
    </div>
  );
}