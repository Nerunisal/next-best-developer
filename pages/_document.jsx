import Document, { Head, Html, Main, NextScript } from 'next/document';
<<<<<<< HEAD

class MyDocument extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <link rel="icon" href="logo.svg" type="image/svg+xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
=======
 
 class MyDocument extends Document {
   static async getInitialProps(context) {
     const initialProps = await Document.getInitialProps(context);
     return { ...initialProps };
   }
 
   render() {
     return (
       <Html lang={this.props.locale}>
         <Head>
               <link rel="icon" href="logo.svg" type="image/svg+xml"/>
         </Head>
         <body>
           <Main />
           <NextScript />
         </body>
       </Html>
     );
   }
 }
 
 export default MyDocument;
>>>>>>> master
