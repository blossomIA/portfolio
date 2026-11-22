import Link from "next/link";
import { Portrait } from "./Portrait";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title" className="hero-name">
            Amarachi Blossom <span>Product designer</span>
          </h1>
          <p className="hero-line">
            Creates modern digital products through <b>user research</b>,{" "}
            <b>systems thinking</b>, <b>AI</b>, and <b>clean execution</b>.
          </p>
          <p className="hero-ps">
            PS; Currently accepting <span>exciting design problems</span> ;)
            <br />
            Anywhere in the world, good collaboration required.
          </p>
          <div className="cta-row">
            <Link className="btn btn-solid" href="#work">
              View my work
            </Link>
            <Link className="btn btn-line" href="#contact">
              Let&apos;s build
            </Link>
          </div>
        </div>
        <Portrait />
      </div>
    </section>
  );
}
