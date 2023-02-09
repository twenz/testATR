import "./styles.css";
import { Button, Row } from "antd";
import { DatePicker, Space } from "antd";
function onChange(date, dateString) {
  console.log(date, dateString);
}
export default function TestComponent() {
  return (
    <div
      className="App"
      style={{ height: 540.2, marginTop: 20, backgroundColor: "orange" }}
    >
      <Space direction="vertical">
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
          {/* <DatePicker onChange={onChange} picker="week" />
          <DatePicker onChange={onChange} picker="month" />
          <DatePicker onChange={onChange} picker="quarter" />
          <DatePicker onChange={onChange} picker="year" /> */}
        </Space>
        ,
      </Space>
      ,
    </div>
  );
}
