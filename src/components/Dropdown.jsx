import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function Dropdown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = option => {
    setIsOpen(false);
    onChange(option);
  };

  const list = options.map(o => (
    <div
      className="border-t rounded p-3 hover:bg-slate-100 active:bg-slate-200"
      onClick={() => handleOptionClick(o)}
      key={o.value}>
      {o.label}
    </div>
  ));

  return (
    <div className="relative w-48  m-3 p-2 rounded-lg text-xl">
      <div
        className="flex p-3 justify-between items-center cursor-pointer shadow hover:bg-slate-100 active:bg-slate-200"
        onClick={() => setIsOpen(c => !c)}>
        {value?.label || "Select..."}
        {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      </div>
      {isOpen && <div className="shadow cursor-pointer">{list}</div>}
    </div>
  );
}
