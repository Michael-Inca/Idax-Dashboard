import Image from "next/image";
import Header from "./ui/header";
import { SiteAccess } from "./ui/forms";
import { AdminAccess, Email, NewEmail, NewSubdomain, FtpDatas, Memory } from "./ui/cards";

export default function Home() {
  return (
    <div className="max-h-screen">
      <Header />
      <main className="flex flex-col justify-center items-center">
        <div className="flex w-full">
          <div className="w-1/3"></div>
          <div className="welcome w-1/3 flex flex-col items-center justify-center">
            <h1 className="Message my-4 text-2xl align-middle text-center">Ciao @user Benvenuto nella Dashboard di Amministrazione</h1>
            {/* <SiteAccess /> */}
          </div>
          <div className="w-1/3"></div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <AdminAccess />
          <Email />
          <NewEmail />
          <NewSubdomain />
          <Memory />
          <FtpDatas />
        </div>

      </main>
      <footer className="flex justify-end  mt-10 mr-10">
        <div className="flex flex-col place-items-center">
          <button className="rounded-full bg-red-600 text-white text-center w-32 h8 font-bold mb-2">Elimina Sito</button>
          <h6 className="font-bold">Perderai tutti i dati e non è previsto un rimborso</h6>
        </div>
      </footer>
    </div>
  );
}
