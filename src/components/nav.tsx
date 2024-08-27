import Link from "next/link";
import { FC } from "react";

/**
 * ナビのコンポーネント
 * @returns {JSX}
 */
const Nav: FC = () => {
  return (
    <nav className="px-6 text-9xl lg:text-xl w-full">
      {/* ↑↑追加↑↑ */}
      <ul className="flex flex-row gap-x-8">
        <li>
          <Link href={"#"} className="hover:text-blue-500">
            <p className="Portfolio">Portforio</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
