import "./../styles/global.css";

function HeroSection() {
  return (
    <div className="hero">
      <h1>Connecting Talent with<br />Opportunity in Nepal</h1>
      <p>
        Kaamko Kura is your go-to platform for finding skilled freelancers 
        and exciting project opportunities, right here in Nepal.
      </p>

      <div className="hero-buttons">
        <button className="btn-primary">Find Work →</button>
        <button className="btn-secondary">Hire Talent</button>
      </div>
    </div>
  );
}

export default HeroSection;
