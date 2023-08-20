import { LandingContent } from '@/components/LandingContent';

export default function Home() {
  return (
    <div className="container landing">
      <div className="row">
        <LandingContent />
        <div className="col-7 h-100 landing-img"></div>
      </div>
    </div>
  );
}
