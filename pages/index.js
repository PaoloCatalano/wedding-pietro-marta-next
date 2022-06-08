import React from "react";
import Head from "next/head";
import Image from "next/image";
import Video from "../components/Video";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Marta e Pietro</title>
      </Head>
      <div className="container ">
        <div className="pic-container appear">
          <Image
            priority
            src="/pietro-w.png"
            alt="pietro"
            width={350}
            height={420}
            className="moving"
          />

          <Image
            priority
            src="/marta-w.png"
            alt="marta"
            width={350}
            height={420}
            className="moving"
          />
        </div>
        <div className="title appear" style={{ "--delay": "1s" }}>
          <h1>Pietro e Marta</h1>
        </div>
        <div className="date appear" style={{ "--delay": "1.5s" }}>
          <div className="jump">
            <i className="appear">19 Giugno 2022</i>
          </div>
        </div>
        <div className="title appear" style={{ "--delay": "2s" }}>
          <h1>
            <b>OGGI SPOSI!</b>
          </h1>
        </div>
        <section className="animated-pics" style={{ "--delay": "2.5s" }}>
          <div>
            <Image
              priority
              src="/party-1.png"
              alt="party"
              width={350}
              height={420}
              className="alternateABC-A"
            />
          </div>
          <div>
            <Image
              priority
              src="/party-2.png"
              alt="party"
              width={350}
              height={420}
              className="alternateABC-B"
            />
          </div>
          <div>
            <Image
              priority
              src="/party-3.png"
              alt="party"
              width={350}
              height={420}
              className="alternateABC-C"
            />
          </div>
        </section>{" "}
        <section className="text">
          <article className="jump">
            <p className="appear">
              Oggi finalmente si celebra il matrimonio tra Marta e Pietro! Un
              evento atteso da anni ormai!...troppi anni, così tanti che eravamo
              giá pronti a celebrare le loro nozze d&apos;argento!! Potete
              crederci?
            </p>
            <p className="appear">Ebbene si!</p>
            <p className="appear">
              I nostri cari amici finalmente sono riusciti ad allineare i
              pianeti, annullare le macumbe, radunare le fattucchiere piú
              potenti tra tutte le tribù africane conosciute fino ad ora e le
              hanno pregate ti rendere possibile l&apos;organizzazione di tale
              evento!
            </p>
          </article>
        </section>
        <section className="animated-pics">
          <div>
            <Image
              priority
              src="/marta-open.png"
              alt="marta"
              width={350}
              height={420}
              className="alternate-A"
            />
          </div>
          <div>
            <Image
              priority
              src="/marta-closed.png"
              alt="marta"
              width={350}
              height={420}
              className="alternate-B"
            />
          </div>
        </section>
        <section className="text">
          <article>
            <p>
              Catania è stata la città che vi ha fatto incontrare. Galeotta fu
              l&apos;università, i colleghi e qualche amicizia in comune. Del
              resto si sa che le cose belle iniziano sempre per caso.
            </p>
            <p>
              Ogni storia d&apos;amore che si rispetti ha una colonna sonora
              d&apos;eccezione che la contraddistingua. Meglio se rock o
              addirittura metal! E come fare a resistere al fascino di un
              giovane cantante, frontman di una band emergente e di successo??
              Fu subito amore a prima vista... o meglio al primo ascolto.
            </p>
          </article>
        </section>
        <section style={{ margin: "3rem 0 5rem 0" }}>
          <Video />
        </section>
        <section className="text">
          <article>
            <p>
              Modica è famosa per il suo tipico cioccolato, per l&apos;arte e la
              storia che l&apos;ha vista conquistata da popoli e culture
              diverse. Soprattutto ha dato i natali alla splendida sposa, che
              l&apos;ha vista sbocciare sino alla maggiore età. Ma le
              aspettative erano tante e la voglia di crescere e di esplorare era
              fortissima, oltre che di trovare il Grande Amore.
            </p>
          </article>
        </section>
        <section className="animated-pics">
          <div>
            <Image
              priority
              src="/pietro-y-open.png"
              alt="pietro smile"
              width={350}
              height={420}
              className="alternate-A"
            />
          </div>
          <div>
            <Image
              priority
              src="/pietro-y-closed.png"
              alt="pietro"
              width={350}
              height={420}
              className="alternate-B"
            />
          </div>
        </section>
        <section className="text">
          <article>
            <p>
              Lo sposo, creativo ed eclettico, è sempre stato una mente in
              movimento. Non faceva in tempo a finire un progetto che ne
              iniziava almeno altri tre. Più studiava, più sperimentava, più
              provava e più Catania gli stava stretta. Cresceva in lui la voglia
              di partire, di internazionalità, di scoprire il mondo. Ancora più
              invogliato se accompagnato da una compagna di vita perfetta.
            </p>
          </article>
        </section>
        <section className="animated-pics">
          <div>
            <Image
              priority
              src="/marta-w-open.png"
              alt="marta"
              width={350}
              height={420}
              className="alternate-A"
            />
          </div>
          <div>
            <Image
              priority
              src="/marta-w-closed.png"
              alt="marta"
              width={350}
              height={420}
              className="alternate-B"
            />
          </div>
        </section>
        <section className="text">
          <article>
            <p>
              I due piccioncini sono volati via verso nord ovest dell'Europa,
              prima l&apos;uno e poi l&apos;altra. Manchester è a tutti gli
              effetti il vostro nido d&apos;amore, dove avete messo radici e
              costruito le basi per la una vita insieme. La vostra casa è lo
              scrigno della vostra relazione. Chi ha il piacere di venire a
              trovarvi viene avvolto da tale magia.
            </p>
          </article>
        </section>
        <section className="animated-pics">
          <div>
            <Image
              priority
              src="/pietro-w-smile.png"
              alt="pietro smile"
              width={350}
              height={420}
              className="alternate-A"
            />
          </div>
          <div>
            <Image
              priority
              src="/pietro-w.png"
              alt="pietro"
              width={350}
              height={420}
              className="alternate-B"
            />
          </div>
        </section>
        <section className="text">
          <article>
            <p>
              E che dire degli amici? Sono sempre stati vicini e pazienti,
              seguendo passo passo tutte le varie fasi, come nelle più moderne e
              migliori serie Netflix! Hanno deciso di volare da varie parti
              d&apos;Italia e d&apos;Europa e di raggiungervi sino ad Ispica per
              celebrare questo evento, tanto proclamato e tanto posticipato, non
              curanti di qualsiasi altro ostacolo. Questo è il colpo di scena
              più bello. Oggi è un giorno speciale, ma ricordate: questo non è
              il lieto fine come si è abituati a vedere nelle favole Disney.
              Oggi è l&apos;inizio del vostro percorso di coppia per il
              raggiungimento del fatidico FOREVAH, per cui...
              <p>
                <strong style={{ textTransform: "capitalize" }}>
                  viva gli sposi e viva il vostro amore.
                </strong>
              </p>
            </p>
            <p>Con Affetto,</p>
            <p>Da:</p>
            <div
              className="pic-container appear"
              style={{ marginBottom: "3rem" }}
            >
              <div>
                <p>Paolo</p>
                <Image
                  priority
                  src="/paolo.png"
                  alt="paolo"
                  width={350}
                  height={420}
                  className="moving"
                />
              </div>
              <div>
                <p>Minhye</p>
                <Image
                  priority
                  src="/mine.png"
                  alt="minhye"
                  width={350}
                  height={420}
                  className="moving"
                />
              </div>
              <div>
                <p>Roberto</p>
                <Image
                  priority
                  src="/roberto.png"
                  alt="roberto"
                  width={350}
                  height={420}
                  className="moving"
                />
              </div>
            </div>
            <div className="pic-container appear">
              <div>
                <p>Gaetano</p>
                <Image
                  priority
                  src="/tano.png"
                  alt="tano"
                  width={350}
                  height={420}
                  className="moving"
                />
              </div>
              <div>
                <p>Eros</p>
                <Image
                  priority
                  src="/eros.png"
                  alt="eros"
                  width={350}
                  height={420}
                  className="moving"
                />
              </div>
              <div>
                <p>Roberta</p>
                <Image
                  priority
                  src="/roberta.png"
                  alt="roberta"
                  width={350}
                  height={420}
                  className="moving"
                />
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};
export default IndexPage;
