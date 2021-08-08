import { useState } from 'react'
function HandleErrors(response) {

    const [errMes, setErrMes] = useState("");

    if (!response.ok) {
        // setErrMes(response.text())
        if (response.status === 400) {
            response.json().then(msg => {
                setErrMes(msg.message)
                console.log(errMes);
            })
        }
        throw Error(response.statusText);
    }
    return response;
}
export default HandleErrors