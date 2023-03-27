import Link from "next/link";
import { type FormEventHandler } from "react";

import styles from "../styles/Task.module.css";

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

// TODO: update this React component, you may change function signature
export function ToggleButton({ children }: ToggleButtonProps) {
  /**
   * Requirement:
   * - when clicking an unselected button, it will show a selected style "toggle-button-selected"
   * - when clicking a selected button, it should cancel the selection and no buttons are selected
   * - reuse the same button for task-two
   */
  return <button className={styles["toggle-button"]}>{children}</button>;
}

// TODO: update this React component
export default function TaskOne() {
  const handleSubmit = () => {
    /**
     * Requirement:
     * - if a button is selected, show alert "You are currently selecting button x"
     * - if no buttons are selected, show alert "Please select a button"
     * - there could only be one selected button at a time
     */
  };

  return (
    <PageTemplate title="Task 1">
      <ToggleButton>{0}</ToggleButton>
      <ToggleButton>{1}</ToggleButton>
      <ToggleButton>{2}</ToggleButton>
      <ToggleButton>{3}</ToggleButton>
      <ToggleButton>{4}</ToggleButton>
      <ToggleButton>{5}</ToggleButton>
      <ToggleButton>{6}</ToggleButton>
      <ToggleButton>{7}</ToggleButton>
      <ToggleButton>{8}</ToggleButton>
      <ToggleButton>{9}</ToggleButton>
    </PageTemplate>
  );
}
