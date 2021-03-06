import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Video from "../components/Video";
import blurData from "../lib/blurDataURL";

const IndexPage = () => {
  const variants = {
    initial: { opacity: 0, x: -100 },
    inView: { opacity: 1, x: 0 },
    initial_Y: { opacity: 0, x: -100, y: -100 },
    inView_Y: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <>
      <Head>
        <title>Marta e Pietro</title>
      </Head>
      <div className="container">
        <div className="pic-container appear">
          <Image
            placeholder="blur"
            blurDataURL={blurData}
            priority
            src="/pietro-w.png"
            alt="pietro"
            width={350}
            height={420}
            className="moving"
          />

          <Image
            placeholder="blur"
            blurDataURL={blurData}
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
              placeholder="blur"
              blurDataURL={blurData}
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
              placeholder="blur"
              blurDataURL={blurData}
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
              placeholder="blur"
              blurDataURL={blurData}
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
              evento atteso da anni ormai!...troppi anni, cos?? tanti che eravamo
              gi?? pronti a celebrare le loro nozze d&apos;argento!! Potete
              crederci?
            </p>
            <p className="appear">Ebbene si!</p>
            <p className="appear">
              I nostri cari amici finalmente sono riusciti ad allineare i
              pianeti, annullare le macumbe, radunare le fattucchiere pi??
              potenti tra tutte le trib?? africane conosciute fino ad ora e le
              hanno pregate di rendere possibile l&apos;organizzazione di tale
              evento!
            </p>
          </article>
        </section>
        <motion.section
          variants={variants}
          initial="initial"
          whileInView="inView"
          viewport={{ once: false }}
          className="animated-pics"
        >
          <div>
            <Image
              placeholder="blur"
              blurDataURL={blurData}
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
              placeholder="blur"
              blurDataURL={blurData}
              priority
              src="/marta-closed.png"
              alt="marta"
              width={350}
              height={420}
              className="alternate-B"
            />
          </div>
        </motion.section>
        <section className="text">
          <article>
            <p>
              Catania ?? stata la citt?? che vi ha fatto incontrare. Galeotta fu
              l&apos;universit??, i colleghi e qualche amicizia in comune. Del
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
        <motion.section
          variants={variants}
          initial="initial_Y"
          whileInView="inView_Y"
          viewport={{ once: false }}
          style={{ margin: "3rem 0 5rem 0" }}
        >
          <Video />
        </motion.section>
        <section className="text">
          <article>
            <p>
              Modica ?? famosa per il suo tipico cioccolato, per l&apos;arte e la
              storia che l&apos;ha vista conquistata da popoli e culture
              diverse. Soprattutto ha dato i natali alla splendida sposa, che
              l&apos;ha vista sbocciare sino alla maggiore et??. Ma le
              aspettative erano tante e la voglia di crescere e di esplorare era
              fortissima, oltre che di trovare il Grande Amore.
            </p>
          </article>
        </section>
        <motion.section
          variants={variants}
          initial="initial"
          whileInView="inView"
          viewport={{ once: false }}
          className="animated-pics"
        >
          <div>
            <Image
              placeholder="blur"
              blurDataURL={blurData}
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
              placeholder="blur"
              blurDataURL={blurData}
              priority
              src="/pietro-y-closed.png"
              alt="pietro"
              width={350}
              height={420}
              className="alternate-B"
            />
          </div>
        </motion.section>
        <section className="text">
          <article>
            <p>
              Lo sposo, creativo ed eclettico, ?? sempre stato una mente in
              movimento. Non faceva in tempo a finire un progetto che ne
              iniziava almeno altri tre. Pi?? studiava, pi?? sperimentava, pi??
              provava e pi?? Catania gli stava stretta. Cresceva in lui la voglia
              di partire, di internazionalit??, di scoprire il mondo. Ancora pi??
              invogliato se accompagnato da una compagna di vita perfetta.
            </p>
          </article>
        </section>
        <motion.section
          variants={variants}
          initial="initial"
          whileInView="inView"
          viewport={{ once: false }}
          className="animated-pics"
        >
          <div>
            <Image
              placeholder="blur"
              blurDataURL={blurData}
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
              placeholder="blur"
              blurDataURL={blurData}
              priority
              src="/marta-w-closed.png"
              alt="marta"
              width={350}
              height={420}
              className="alternate-B"
            />
          </div>
        </motion.section>
        <section className="text">
          <article>
            <p>
              I due piccioncini sono volati via verso nord ovest
              dell&apos;Europa, prima l&apos;uno e poi l&apos;altra. Manchester
              ?? a tutti gli effetti il vostro nido d&apos;amore, dove avete
              messo radici e costruito le basi per una vita insieme. La vostra
              casa ?? lo scrigno di una relazione bella e duratura. Chi ha il
              piacere di venire a trovarvi viene avvolto da tale magia.
            </p>
          </article>
        </section>
        <motion.section
          variants={variants}
          initial="initial"
          whileInView="inView"
          viewport={{ once: false }}
          className="animated-pics"
        >
          <div>
            <Image
              placeholder="blur"
              blurDataURL={blurData}
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
              placeholder="blur"
              blurDataURL={blurData}
              priority
              src="/pietro-w.png"
              alt="pietro"
              width={350}
              height={420}
              className="alternate-B"
            />
          </div>
        </motion.section>
        <section className="text">
          <article>
            <p>
              E che dire degli amici? Sono sempre stati vicini e pazienti,
              seguendo passo passo tutte le varie fasi, come nelle pi?? moderne e
              migliori serie Netflix! Hanno deciso di volare da varie parti
              d&apos;Italia e d&apos;Europa e di raggiungervi sino ad Ispica per
              celebrare questo evento, tanto proclamato e tanto posticipato, non
              curanti di qualsiasi altro ostacolo. Questo ?? il colpo di scena
              pi?? bello. Oggi ?? un giorno speciale, ma ricordate: questo non ??
              il lieto fine come si ?? abituati a vedere nelle favole Disney.
              Oggi ?? l&apos;inizio del vostro percorso di coppia per il
              raggiungimento del fatidico FOREVAH, per cui...
            </p>
            <div style={{ marginBottom: "3rem" }}>
              <strong style={{ textTransform: "capitalize" }}>
                viva gli sposi e viva il vostro amore!
              </strong>
            </div>
            <p>Con Affetto,</p>
            <p>Da:</p>
            <motion.section
              variants={variants}
              initial="initial_Y"
              whileInView="inView_Y"
              viewport={{ once: false }}
            >
              <div
                className="pic-container appear"
                style={{ marginBottom: "3rem" }}
              >
                <div>
                  <p>Paolo</p>
                  <Image
                    placeholder="blur"
                    blurDataURL={blurData}
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
                    placeholder="blur"
                    blurDataURL={blurData}
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
                    placeholder="blur"
                    blurDataURL={blurData}
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
                    placeholder="blur"
                    blurDataURL={blurData}
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
                    placeholder="blur"
                    blurDataURL={blurData}
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
                    placeholder="blur"
                    blurDataURL={blurData}
                    priority
                    src="/roberta.png"
                    alt="roberta"
                    width={350}
                    height={420}
                    className="moving"
                  />
                </div>
              </div>
            </motion.section>
          </article>
        </section>
        <center style={{ marginBottom: "2rem" }}>
          <Link href="/gallery">
            <a className="gallery-link">Vai alla Gallery</a>
          </Link>
        </center>
        <center>
          <Link href="/videos">
            <a className="gallery-link">Vai ai Video</a>
          </Link>
        </center>
      </div>
    </>
  );
};
export default IndexPage;
