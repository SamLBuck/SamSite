export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16
      }}>
        <div>
          <h1 style={{ margin: 0 }}>Sam Buck</h1>
          <p style={{ color: "#444", margin: 0 }}></p>
        </div>

          <img
          src="/Website_HeadshotPM.png" // or /assets/img/Website_HeadshotPM.png if in that folder
          alt="Sam Buck headshot"
          style={{
            width: "120px",     // wider rectangle
            height: "auto",     // auto height keeps full proportions
            borderRadius: "0px", // slight rounding
            objectFit: "contain", // show entire image, no crop
            border: "1px solid #ddd",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          }}
        />
      </header>


      <h2 style={{ marginTop: 24 }}>Projects</h2>
      <ul>
        <li>FROST research pipeline (R)</li>
        <li>Obsidian collaboration plugin</li>
        <li>Embedded Machine Learning Text Bubble Notifier</li>
        <li>Jackbox style party game</li>
        <li>Event Bingo App</li>
      </ul>
    </div>
  );
}
