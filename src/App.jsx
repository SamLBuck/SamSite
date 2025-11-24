export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 24, maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
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
          src="/Website_HeadshotPM.png" // put this in /public if you haven't already
          alt="Sam Buck headshot"
          style={{
            width: "120px",
            height: "auto",
            borderRadius: 0,
            objectFit: "contain",
            border: "1px solid #ddd",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          }}
        />
      </header>

      {/* Resume */}
      <section style={{ marginTop: 24 }}>
        <h2 style={{ marginBottom: 8 }}>Resume</h2>
        <p style={{ maxWidth: 650, color: "#444" }}>
          I work at the intersection of software and social science research:
          FROST Center research assistant, CS Help Center leader, SHARP summer
          researcher, and developer on several applied projects.
        </p>

        <a
          href="/Buck_Resume_site.pdf" // make sure this file is in /public
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

      {/* Projects */}
      <section style={{ marginTop: 32 }}>
        <h2>Projects</h2>
        <ul style={{ paddingLeft: 20, lineHeight: 1.5 }}>
          <li style={{ marginBottom: 8 }}>
            <strong>FROST Research Pipeline (R)</strong> – Built R scripts and
            text-processing pipelines for ~150 annotated books. These scripts
            are now used by professors in their professional research to
            extract, clean, and analyze sections of text.
          </li>

          <li style={{ marginBottom: 8 }}>
            <strong>Event Bingo / INSPIRES Practice Project</strong> – Event-
            based Bingo app built with <strong>Flutter &amp; Dart</strong> on
            the front end and a Spring Boot backend (board and game controllers,
            Liquibase migrations). Users can create boards, share them, and join
            games with minimal friction.
          </li>

          <li style={{ marginBottom: 8 }}>
            <strong>Obsidian Collaboration Plugin</strong> – TypeScript plugin
            that syncs notes over a local WebSocket relay, uses MAC/IP-based
            keys, and restores draggable personal comment overlays when a note
            loads.
          </li>

          <li style={{ marginBottom: 8 }}>
            <strong>Typing Indicator Detector</strong> – Prototyped an embedded
            system that uses <strong>machine-learning-style screen reading</strong>{" "}
            to identify iMessage typing bubble indicators from screen content
            on a Mac mini.
          </li>

          <li style={{ marginBottom: 8 }}>
            <strong>Jackbox-Style Party Game (Justin Game)</strong> – Local network party game
            with a browser client and Node/WebSocket relay for real-time prompts,
            scoring, and audience participation.
            Narrative / logic game
            prototype written in Python, built around a custom state machine and
            evolving story mechanics.
          </li>

        </ul>
      </section>
    </div>
  );
}
