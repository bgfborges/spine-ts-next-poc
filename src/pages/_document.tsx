import Document, { Html, Main, NextScript, Head } from 'next/document'
import Script from 'next/script'

// This File is used to render only once when the website is generated
// Here we can define, for example, the global fonts that needs to be rendered one once

export default class MyDocument extends Document{

    render(){
        return(
            <Html lang="pt-BR">
                <Head>
                    <meta name="description" content="Traga sua escola para o metaverso, através de gamificação e tecnologia, sem deixar de lado a diversão e o aprendizado" />
                    <meta name="keywords" content="escola,metaverso,gamificação,sideverse,multiverso,experiência,aprendizado,divertido" />
                    <meta property="og:title" content="Marry me! Regina" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.site.com.br/" />
                    <meta property="og:image" content="pending" />
                    <meta property="og:description" content="A Gift to my lovely Regina." />
                    <meta property="og:locale " content="pt_BR" />

                    <Script src="../dist/iife/spine-canvas.js" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
