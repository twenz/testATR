import { render } from "react-dom";
import "antd/dist/antd.css";
import TestComponent from "./TestComponent";

const rootElement = document.getElementById("root");
render(<TestComponent />, rootElement);
