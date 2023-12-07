const baseUrl = "http://localhost:3030"

export async function login(loginData) {
    const response = await fetch(`${baseUrl}/users/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(loginData)
    })
    const loggedData = await response.json()
    
    return loggedData
}

export async function signup(signupData, token) {
    const response = await fetch(`${baseUrl}/users/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Authorization": `${token}`,
        },
        body: JSON.stringify(signupData)
    })
    const signedupData = await response.json()
    console.log(signedupData)
    return signedupData
}



export async function logout(token) {
    const response = await fetch(`${baseUrl}/users/logout`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Authorization": `${token}`,
        },
    })

    if (response.status === 204) {
        return {}
    }

    const result = response.json()
    if(!response.ok) {
        throw result
    }
}