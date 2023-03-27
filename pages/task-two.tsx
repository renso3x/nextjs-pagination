import { PageTemplate, ToggleButton } from "./task-one";

import React from "react";

export default function TaskTwo() {
  const [selectedButtons, setSelectedButtons] = React.useState<number[]>([]);

  const handleButtonClick = (buttonNumber: number) => {
    if (selectedButtons.includes(buttonNumber)) {
      setSelectedButtons(selectedButtons.filter((n) => n !== buttonNumber));
    } else {
      setSelectedButtons([...selectedButtons, buttonNumber]);
    }
  };

  const handleSubmit = () => {
    if (selectedButtons.length === 0) {
      alert("Please select two buttons");
    } else if (selectedButtons.length === 1) {
      alert("Please select another button");
    } else if (selectedButtons.length === 2) {
      const sortedSelectedButtons = selectedButtons.sort();
      alert(
        `Currently selecting from ${sortedSelectedButtons[0]} to ${sortedSelectedButtons[1]}`
      );
    }
  };

  return (
    <PageTemplate title="Task 2" onSubmit={handleSubmit}>
      {Array.from({ length: 10 }).map((_, index) => (
        <ToggleButton
          key={index}
          selected={selectedButtons.includes(index)}
          onClick={() => handleButtonClick(index)}
        >
          {index}
        </ToggleButton>
      ))}
    </PageTemplate>
  );
}