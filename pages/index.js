import Image from "next/image";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          textAlign: "center",
          padding: "20px",
          border: "2px solid #ccc",
          borderRadius: "10px",
          marginBottom: "20px",
          fontFamily: "Kode Mono, monospace",
          fontSize: "20px",
        }}
      >
        <p>
          Se estiver se sentindo desmotivado, ou achando que não é bom o
          suficiente, incendeie 🔥 o seu coração💓. Enxugue as lágrimas e siga
          em frente. Quando se entristecer ou se acovardar, lembre-se: o fluxo
          do tempo nunca para, e ele não vai te esperar enquanto você se afoga
          em tristeza.
        </p>
      </div>
      <div>
        <Image src="/images/rengoku.png" alt="image" width={470} height={670} />
      </div>
    </div>
  );
}
export default Home;
