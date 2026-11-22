const socials = [
  { href: "https://linkedin.com/in/amarachiblossom", label: "LinkedIn" },
  { href: "https://twitter.com/amarachiblossom", label: "X" },
  { href: "https://github.com/amarachiblossom", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="bottom">
          <div>
            <p className="logo">
              Amarachi Blossom<i>.</i>
            </p>
            <p className="muted" style={{ fontSize: 14 }}>
              Product Designer
            </p>
          </div>
          <q>Thanks for scrolling this far. You clearly have excellent taste.</q>
          <div className="soc">
            {socials.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
