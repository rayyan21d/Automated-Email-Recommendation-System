import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "paperlink",
  description: "allow researchers to get weekly updates based on their interests",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>

      <footer className='footer'>
        created with ❤ by rayyan
      </footer>
    </body>
  
  </html>
);

export default RootLayout;
