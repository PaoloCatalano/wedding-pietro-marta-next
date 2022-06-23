import Head from "next/head";
import RegVideo from "../components/RegVideo";

export default function videos() {
  return (
    <div>
      <Head>
        <title>Marta e Pietro ¦ Video Gallery</title>
      </Head>
      <center style={{ marginBottom: "3rem" }} className="appear">
        <div className="date">Video Gallery</div>
      </center>
      <section className="appear gallery-container" style={{ "--delay": "1s" }}>
        <RegVideo video="/videos/entry.mp4" title="Ingresso della sposa" />
        <RegVideo video="/videos/entryDance1.mp4" title="Arrivano gli sposi" />
        <RegVideo video="/videos/entryDance2.mp4" title="Continua a ballare" />
        <RegVideo video="/videos/songByPietro.mp4" title="Dedica romantica" />
      </section>
    </div>
  );
}
