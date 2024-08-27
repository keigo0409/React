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

export default function samplesite() {
  return (
    <Layout>
      {/* <body> */}
      <Link href={"/"}>TOPに戻る</Link>
      <div className="end">
        <Image src={"/Stone.png"} alt="" width={800} height={800}></Image>
        <p>
          {" "}
          全6ページのサイトとなっており、使いやすさ、魅力が簡潔に伝わるようなサイト構成になっています。
          <br />
          こちらのWebサイトでは、岩手県の魅力を紹介するWebサイトを作る課題で制作したものです。
          <br></br>
          こちらは岩手県の「魅力」についての紹介をしているサイトになります。
          <br />
        </p>
      </div>
      {/* </body> */}
    </Layout>
  );
}
// export default samplesite;
