import Link from "next/link";

import { getCategories } from "../libs/common";

export default function Home() {
  const categories = getCategories();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id} className="text-2xl font-bold mb-2 text-center">
            <Link className="select-none" href={`/${name}`}>
              {name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
