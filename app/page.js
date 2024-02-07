import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-black">
      <h1 className="text-green-500">WebDev2</h1>

      <ul>
        <li className="bg-black text-green-500">
          <Link href="week-2">Week 2</Link>
        </li>
      </ul>
      <ul>
        <li className="bg-black text-green-500">
          <Link href="week-3">Week 3</Link>
        </li>
      </ul>
    </main>
  );
}