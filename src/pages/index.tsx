import Image from "next/image";
import { Inter } from "next/font/google";
import About from "@/components/about";
import Header from "@/components/header";
import Nav from "@/components/nav";
import Logo from "@/components/logo";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Nav></Nav>
      <div className="section1">
        <div className="article">
          <Image
            className="Bear"
            src="/Bear.jpg"
            alt=""
            width={300}
            height={300}
          ></Image>
          <About></About>
        </div>
      </div>
      <div className="section2">
        <p>
          こちらは一年後期で制作したWebサイトです。<br></br>
          テーマは岩手県の魅力についてでした。
        </p>
        <Link className="link" href={"samplesite2"}>
          <Image src={"/Stone.png"} alt="" width={400} height={400}></Image>
        </Link>
      </div>
      <div className="section2">
        <Link className="link" href={"samplesite"}>
          <Image src={"/image.png"} alt="" width={400} height={400}></Image>
        </Link>
        <p>
          こちらは一年期末で制作したWebサイトです。<br></br>
          テーマは自分の好きなものについてでした。
        </p>
      </div>
      {/* </body> */}
    </Layout>
  );
}
