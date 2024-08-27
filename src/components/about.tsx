import Image from "next/image";
import Header from "./header";

const About = () => {
  return (
    <div className="about">
      <div className="profile">
        <p>氏名 : 鎌田慧悟</p>
        <p>年齢 : 20</p>
        <p>職業 : 専門学生 </p>
        <p>目指している資格</p>
        <p>・基本情報処理技術者試験</p>
        <p>・応用情報処理技術者試験</p>
        <p>興味のある職業</p>
        <p>・フロント：Webデザイナー</p>
      </div>
    </div>
  );
};

export default About;
