import { StoreProvider } from "@contexts/StoreContext";
import "@styles/globals.css";
// import { Source_Sans_3 } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const sans = Source_Sans_3({
//   subsets: ["latin"],
//   weight: ["400", "600"],
//   style: "normal",
// });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{``}</style>
      <StoreProvider>
        <ToastContainer newestOnTop={true} />
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}

// font-family: ${sans.style.fontFamily};
// html {
// }
