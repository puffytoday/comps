import { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function DropdownPage() {
  const [selected, setSelected] = useState(null);

  const handleSelect = o => setSelected(o);

  const options = [
    { label: "Red", value: "red" },
    { label: "Yellow", value: "yellow" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <Dropdown options={options} onChange={handleSelect} value={selected} />
  );
}
