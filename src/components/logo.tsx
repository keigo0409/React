import Link from "next/link";
import { FC } from "react";

type Props = {
  isBoxStyle?: boolean;
};

/**
 * ロゴのコンポーネント
 * @param {boolean} isBoxStyle 長方形の背景色を設定するかどうか
 * @returns {JSX}
 */
const Logo: FC<Props> = ({ isBoxStyle = false }) => {
  return (
    <>
      {isBoxStyle ? (
        <Link href={"/"} className="">
          Portfolio
        </Link>
      ) : (
        <Link href={"/"}>{/* ↑↑修正↑↑ */}</Link>
      )}
    </>
  );
};

export default Logo;
