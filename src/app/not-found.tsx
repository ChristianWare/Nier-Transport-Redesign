import PageIntro from "./components/PageIntro/PageIntro";
import Img from "../../public/images/barry.jpg";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <PageIntro heading='404 not found' src={Img} />
    </main>
  );
}
