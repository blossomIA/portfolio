import Link from "next/link";
import { Portrait } from "./Portrait";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title" className="hero-name">
            Amarachi Blossom <span>Product designer who builds</span>
          </h1>
          <p className="hero-line">
            Designs and builds modern digital products through <b>user research</b>,{" "}
            <b>systems thinking</b>, <b>AI</b>, and <b>clean execution</b>.
          </p>
          <p className="hero-ps">
            ✨ Open to new roles and <span>problems worth building</span>
            <br />
            🌍 Based in Germany, working with teams worldwide
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
