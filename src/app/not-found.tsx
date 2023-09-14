import PageIntro from "./components/PageIntro/PageIntro";
import Img from "../../public/images/barry.jpg";

export default function NotFound() {
  return (
    <main>
      <PageIntro heading='404 not found' src={Img} />
    </main>
  );
}
