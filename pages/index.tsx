import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p style={{ textAlign: "center" }}>
        Please follow instructions on <code>README.md</code>
      </p>
      <ul>
        <li>
          <Link href="/task-one">Task 1</Link>
        </li>
        <li>
          <Link href="/task-two">Task 2</Link>
        </li>
      </ul>
    </div>
  );
}
