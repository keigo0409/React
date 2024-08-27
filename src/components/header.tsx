import Image from "next/image";
import { deflate } from "zlib";

const Header = () => {
  return <Image src="/Bear.jpg" alt="" width={300} height={300}></Image>;
};

export default Header;
