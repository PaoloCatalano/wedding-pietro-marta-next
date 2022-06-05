import React from "react";
import Head from "next/head";
import Image from "next/image";
import useOnScreen from "../hooks/useOnScreen";

const IndexPage = () => {
  const refDate = React.useRef();
  const dateOnScreen = useOnScreen(refDate, "-70px");
  const refText = React.useRef();
  const textOnScreen = useOnScreen(refText, "-100px");
  return (
    <>
      <Head>
        <title>Pietro e Marta</title>
      </Head>
      <div className="container ">
        <div className="pic-container appear">
          <Image
            src="/pietro-w.png"
            alt="pietro"
            width={350}
            height={420}
            className="moving"
          />
          <Image
            src="/marta-w-svg.svg"
            alt="marta"
            width={350}
            height={420}
            className="moving"
          />
        </div>
        <div className="title appear" style={{ "--delay": "1s" }}>
          <h1>
            Pietro
            <span style={{ margin: "0 2rem" }}>e</span> Marta
          </h1>
          <h1>
            <b>OGGI SPOSI!</b>
          </h1>
        </div>
        <div
          className="date "
          ref={refDate}
          style={{
            height: 180,
          }}
        >
          {dateOnScreen && (
            <div className="jump">
              <i className="appear">19 Giugno 2022</i>
            </div>
          )}
        </div>
        <section
          className="text"
          ref={refText}
          style={{
            height: 590,
          }}
        >
          {textOnScreen && (
            <article className="jump">
              <p className="appear">
                Oggi finalmente si celebra il matrimonio tra Marta e Pietro! Un
                evento atteso da anni ormai!...troppi anni, così tanti che
                eravamo giá pronti a celebrare le loro nozze d&apos;argento!!
                Potete crederci?
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
          )}
        </section>
        <section className="animated-pics">
          <div>
            <Image
              src="/pietro-w-smile.png"
              alt="pietro"
              width={350}
              height={420}
              className="alternate-A"
            />
          </div>
          <div>
            <Image
              src="/pietro-w.png"
              alt="pietro"
              width={350}
              height={420}
              className="alternate-B"
            />
          </div>
        </section>
      </div>
    </>
  );
};
export default IndexPage;
