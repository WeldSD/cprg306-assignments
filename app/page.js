import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-black ml-6" >
      <h1 className="text-green-500 text-xl mt-4 mb-4">WebDev2</h1>

      <ul>
        <li className="bg-black text-lg text-green-500 mb-4">
          <Link href="week-2">Week 2</Link>
        </li>
      </ul>
      <ul>
        <li className="bg-black text-lg text-green-500 mb-4">
          <Link href="week-3">Week 3</Link>
        </li>
      </ul>
      <ul>
        <li className="bg-black text-lg text-green-500 mb-4">
          <Link href="week-4">Week 4</Link>
        </li>
      </ul>
    </main>
  );
}