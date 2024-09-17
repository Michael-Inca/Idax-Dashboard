'use client';

import { SiteAccessAdmin, EmailAccess, CreateEmail, CreateSubDomain } from "./forms"
import { useState } from "react"
import clsx from "clsx"


export function AdminAccess() {
    return (
        <div className="flex flex-col shadow-card text-center p-5 rounded-xl bg-bcard items-center w-96 max-h-60 justify-center">
            <h2 className="font-bold text-2xl mb-5">Accedi al tuo sito come amministratore</h2>
            <SiteAccessAdmin />
        </div>
    )
}

export function Email() {
    return (
        <div className="flex flex-col shadow-card text-center p-5 rounded-xl bg-bcard items-center w-96 max-h-60 justify-center">
            <h2 className="font-bold text-2xl mb-5">Accedi alla WebMail</h2>
            <EmailAccess />
        </div>
    )
}

export function NewEmail() {
    return (
        <div className="flex flex-col shadow-card text-center p-5 rounded-xl bg-bcard w-96 max-h-60 justify-center">
            <h2 className="font-bold text-2xl mb-5">Crea nuova E-Mail</h2>
            <CreateEmail />
        </div>
    )
}

export function NewSubdomain() {
    return (
        <div className="flex flex-col shadow-card text-center p-5 rounded-xl bg-bcard w-96 max-h-60 justify-center">
            <h2 className="font-bold text-2xl mb-5">Richiedi un nuovo sottodominio</h2>
            <CreateSubDomain />
        </div>
    )
}

export function FtpDatas() {
    const ftp = {
        host: 'localhost',
        port: '22',
        user: 'io',
        password: 'la mia',
        rootDir: 'root'
    }
    return (
        <div className="flex flex-col shadow-card text-center p-5 rounded-xl bg-bcard w-96 max-h-60 justify-center">
            <h2 className="font-bold text-2xl">Accesso tramite FTP</h2>
            <ul className="text-start mx-8 my-3 bg-cbutton text-white text-basis rounded-[20px] py-3 px-8 font-bold">
                <li>{`Host: ${ftp.host}`}</li>
                <li>{`Porta: ${ftp.port}`}</li>
                <li>{`User: ${ftp.user}`}</li>
                <li>{`Password: ${ftp.password}`}</li>
                <li>{`Root directory: ${ftp.rootDir}`}</li>
            </ul>
        </div>
    )
}

export function Memory() {
    const description_map: any = {
        "free": "Libero",
        "almost": "Quasi Esaurita",
        "full": "Esaurita"
    }
    const options: string[] = ["free", "almost", "full"]

    const [option, setOption] = useState('almost')

    function handleClick() {
        const selected_option: string = options[Math.round((Math.random() * 2))]
        setOption(selected_option)
    }

    return (
        <div className="flex flex-col shadow-card text-center p-5 rounded-xl bg-bcard w-96 max-h-60 justify-center items-center">
            <h2 className="font-bold text-2xl">Stato SSD/Archiviazione</h2>
            <div className="flex flex-row w-full justify-center items-center my-5">
                <div className={clsx(
                    "w-14 h-14 rounded-full mr-3",
                    {'bg-[#00FF00]': (option === 'free')},
                    {'bg-yellow-400': (option === 'almost')},
                    {'bg-[#FF0000]': (option === 'full')},
                )
                }
                ></div>
                <h2 className="text-2xl font-bold">{description_map[option]}</h2>
            </div>
            <h6 className="mb-1">Hai esaurito la memoria concessa?</h6>
            <button className="bg-cbutton text-white rounded-full h-8 mx-2.5 w-32 " onClick={handleClick}>Acquista</button>
        </div>
    )
}