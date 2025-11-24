export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>Sam Buck</h1>
          <p style={{ color: "#444", margin: 0 }}>
            Computer Science @ Hope College · Research & Software Projects
          </p>
        </div>

        <img
          src="/Website_HeadshotPM.png" // must be in public/ folder
          alt="Sam Buck headshot"
          style={{
            width: "120px",
            height: "auto",
            borderRadius: "0px",
            objectFit: "contain",
            border: "1px solid #ddd",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          }}
        />
      </header>

      {/* === Resume Section === */}
      <section style={{ marginTop: 24 }}>
        <h2 style={{ marginBottom: 8 }}>Resume</h2>
        <p style={{ maxWidth: 600, color: "#444" }}>
          Research assistant at the Hope Frost Center, CS Help Center leader, and
          SHARP summer researcher. See full details in my resume below.
        </p>

        <a
          href="/Buck_Resume_site.pdf" // matches file in public/
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: 8,
            padding: "8px 14px",
            borderRadius: 6,
            border: "1px solid #222",
            textDecoration: "none",
            color: "#222",
            fontSize: 14,
          }}
        >
          View Resume (PDF)
        </a>
      </section>

      {/* === Projects Section === */}
      <h2 style={{ marginTop: 32 }}>Projects</h2>
      <ul>
        <li>FROST research pipeline (R)</li>
        <li>Obsidian collaboration plugin</li>
        {/* <li>Embedded Machine Learning Text Bubble Notifier</li> */}
        <li>Jackbox style party game</li>
        <li>Event Bingo App</li>
      </ul>
    </div>
  );
}
