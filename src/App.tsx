import "./App.css";
import banner from "/banner.png";

function App() {
  return (
    <>
      <h1>Fancy Fauna</h1>
      <a
        className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 shadow-xl rounded-lg bg-sky-300 hover:bg-sky-400 transition-colors my-4"
        href="https://mintgarden.io/collections/fancy-fauna-col1f90cpk9msmsf9zmecqcr8h0xu40jyr66j5d5aj336qkf50knxc3srq2d6j"
        target="_blank"
      >
        <img
          src="https://mintgarden.io/mintgarden-logo.svg"
          alt="MintGarden logo"
          className="h-8 md:h-10"
        />
        <div className="text-gray-950 text-xl md:text-2xl">
          Click below to mint
        </div>
      </a>
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
