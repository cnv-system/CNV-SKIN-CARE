import Document, { Html, Head, Main, NextScript } from "next/document";

class Mydocument extends Document {
render(){

    return(
        <Html>
            <Head>

                <link rel="manifest" href="/manifest.json"></link>
                <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
                <meta name="theme-color" content="#FFFFFF"></meta>

            </Head>
            <body>
                <Main/>
               <NextScript/>

            </body>
        </Html>
    )
}


}
export default (Mydocument);
