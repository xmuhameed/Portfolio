
import { Projects } from "@/components/Projects";
import TypingHeader from "./TypingHeader";

export default function PortfolioPage() {
  return (
    <div className="container vw-100">
      <h1 className="page-title">
        <TypingHeader />
      </h1>
      <div className="row d-flex justify-content-center portfolioPage">
        <Projects />
      </div>
    </div>
  );
}
