import Head from "next/head";
import Image from "next/image";
import pic from "../public/erropi.jpeg";

export default function Page_2() {
  return (
    <>
      <Head>
        <title>Pietro e Marta</title>
      </Head>
      <Image src={pic} alt="erropi" />
    </>
  );
}
