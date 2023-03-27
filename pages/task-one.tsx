import React from "react";
import Link from "next/link";
import { type FormEventHandler } from "react";

import styles from "../styles/Home.module.css";

interface PageTemplateProps {
  title: string;
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

// PLEASE DO NOT EDIT THIS COMPONENT
export function PageTemplate({ title, children, onSubmit }: PageTemplateProps) {
  return (
    <>
      <main>
        <h1>{title}</h1>
        <form onSubmit={onSubmit}>
          <div className={styles["toggle-container"]}>{children}</div>
          <button className={styles["submit-button"]} type="submit">
            Submit
          </button>
        </form>
      </main>
      <footer>
        <Link href="/">Home</Link>
      </footer>
    </>
  );
}

interface ToggleButtonProps {
  children: React.ReactNode;
}
export function ToggleButton({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  const className = selected
    ? styles["toggle-button-selected"]
    : styles["toggle-button"];

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}

export default function TaskOne() {
  const [selectedButton, setSelectedButton] = React.useState<number | null>(
    null
  );

  const handleButtonClick = (buttonNumber: number) => {
    if (selectedButton === buttonNumber) {
      setSelectedButton(null);
    } else {
      setSelectedButton(buttonNumber);
    }
  };

  const handleSubmit = () => {
    if (selectedButton === null) {
      alert("Please select a button");
    } else {
      alert(`You are currently selecting button ${selectedButton}`);
    }
  };

  return (
    <PageTemplate title="Task 1" onSubmit={handleSubmit}>
      {Array.from({ length: 10 }).map((_, index) => (
        <ToggleButton
          key={index}
          selected={selectedButton === index}
          onClick={() => handleButtonClick(index)}
        >
          {index}
        </ToggleButton>
      ))}
    </PageTemplate>
  );
}