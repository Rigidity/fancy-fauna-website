import "./App.css";
import banner from "/banner.png";

function App() {
  return (
    <>
      <h1>Fancy Fauna</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          style={{
            color: "black",
            fontSize: "2rem",
            display: "inline-flex",
            alignItems: "center",
            padding: "20px",
            gap: "6px",
            borderRadius: "20px",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
          href="https://mintgarden.io/collections/fancy-fauna-col1f90cpk9msmsf9zmecqcr8h0xu40jyr66j5d5aj336qkf50knxc3srq2d6j"
          target="_blank"
        >
          <img
            src="https://mintgarden.io/mint-logo.svg"
            style={{ width: "30px", height: "30px" }}
            alt="MintGarden logo"
          />
          Click below to mint
        </a>
      </div>
      <a
        href="https://mintgarden.io/collections/fancy-fauna-col1f90cpk9msmsf9zmecqcr8h0xu40jyr66j5d5aj336qkf50knxc3srq2d6j"
        target="_blank"
      >
        <img
          src={banner}
          style={{
            borderRadius: "10px",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            maxWidth: "100%",
          }}
        />
      </a>
    </>
  );
}

export default App;
