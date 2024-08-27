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
        <Image src={"/image.png"} alt="" width={800} height={800}></Image>
        <p>
          こちらのWebサイトでは、好きなテーマを紹介するWebサイトを作る課題で制作したものです。
          <br />
          こちらはゲーム「FF14」についての紹介をしているサイトになります。
          <br />
          全５ページのサイトとなっており、１カラムから２カラム、グリッドレイアウトを用いて作成しています
        </p>
      </div>
      {/* </body> */}
    </Layout>
  );
}
// export default samplesite;
