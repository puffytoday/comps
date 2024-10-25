import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = i => setExpandedIndex(c => (c === i ? -1 : i));

  return (
    <div className="border-x border-t rounded">
      {items.map((i, index) => {
        const isExpanded = index === expandedIndex;
        const icon = (
          <span className="text-xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
          </span>
        );

        return (
          <div key={index}>
            <div
              onClick={() => handleClick(index)}
              className="flex justify-between cursor-pointer items-center border-b bg-gray-50 p-3">
              {i.label}
              {icon}
            </div>
            {isExpanded && (
              <div className="text-slate-400 p-5 border-b">{i.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
