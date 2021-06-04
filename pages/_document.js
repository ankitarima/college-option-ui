import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charSet="utf-8"/>
            
        <link href="/assets/img/favicon.png" rel="icon"/>
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Montserrat:300,400,500,600,700" rel="stylesheet"/>

        <link href="/assets/vendor/aos/aos.css" rel="stylesheet"/>
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>

        <link href="/assets/css/style.css" rel="stylesheet"/>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

        </Head>
        <body>
          <Main />
          <NextScript />
          

        <script src="/assets/vendor/aos/aos.js"></script>
        <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="/assets/vendor/php-email-form/validate.js"></script>
        <script src="/assets/vendor/purecounter/purecounter.js"></script>
        <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>

        <script src="/assets/js/main.js"></script>

        </body>
      </Html>
    )
  }
}

export default MyDocument