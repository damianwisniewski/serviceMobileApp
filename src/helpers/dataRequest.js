export const requestDB = ({url, method, body}) => new Promise((resolve, reject) => {
    fetch(url, {
        method: method,
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(res => {
            if (res.done) {
                resolve({ message: "Dobra robota! Zgłoszenie zostało pomyślnie wysłane", dataSend: true })
            } else {
                reject({ message: "Coś poszło nie tak! Nie udało się wysłać zgłoszenia, Być może podałeś ZŁY NUMER ZGŁOSZENIA", dataSend: false })
            }
        })
        .catch(() => {
            reject({ message: "Przepraszamy, pojawiły sie problemy techniczne", dataSend: false })
        })
})