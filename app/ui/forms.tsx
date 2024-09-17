export function SiteAccess() {
    return (
        <form>
            <button className="mx-2.5 w-48 h-8 rounded-full bg-blue-500 text-base text-white">Accedi al tuo sito</button>
        </form>
    )
}

export function LogOut() {
    return (
        <form>
            <button className="mx-2.5 w-32 h-5 bg-transparent text-black align-middle text-base">Log Out</button>
        </form>
    )
}

export function SiteAccessAdmin() {
    return (
        <form>
            <button className="mx-2.5 w-32 h-8 rounded-full bg-cbutton text-base text-white">Accedi</button>
        </form>
    )
}

export function EmailAccess() {
    var data = [
        {
            "name": "Ishmael Fisher",
            "email": "sed.pharetra@hotmail.com"
        },
        {
            "name": "Russell Wells",
            "email": "tellus@icloud.couk"
        },
        {
            "name": "Boris Ball",
            "email": "duis.a@aol.org"
        },
        {
            "name": "Francis Chan",
            "email": "mollis@hotmail.net"
        },
        {
            "name": "Carly Horn",
            "email": "blandit.nam@aol.couk"
        }
    ];

    return (
        <form>
            <select
                name="emailAddress"
                id="email"
                defaultValue=""
                className="w-full p-3 mb-5 rounded-md border border-solid border-white" >
                <option value="" disabled>
                    Select an email address
                </option>
                {data.map((customer) => (
                    <option key={customer.name}
                        value={customer.email}>
                        {customer.email}
                    </option>
                ))}
            </select>
            <button className="bg-cbutton text-white rounded-full h-8 mx-2.5 w-32 justify-self-start self-start">Accedi</button>
        </form>
    )
}

export function CreateEmail() {
    return (
        <form >
            <input
                type="text"
                name="newEmail"
                id="newmail"
                placeholder="Crea una nuova E-mail con il tuoi dominio"
                className="w-full p-3 mb-5 rounded-md border border-solid border-white" />
            <button className="bg-cbutton text-white rounded-full h-8 mx-2.5 w-32 justify-self-start self-start">Crea</button>
        </form>)
}

export function CreateSubDomain() {
    return (
        <form >
            <input
                type="text"
                name="newSubdomain"
                id="newsub"
                placeholder="Richiedi un nuovo sotto dominio"
                className="w-full p-3 mb-5 rounded-md border border-solid border-white" />
            <button className="bg-cbutton text-white rounded-full h-8 mx-2.5 w-32 justify-self-start self-start">Richiedi</button>
        </form>)
}