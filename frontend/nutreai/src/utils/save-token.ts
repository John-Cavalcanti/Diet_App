export function saveToken(token: string){
    const stateJSON = JSON.stringify(token)
    localStorage.setItem('@nutreai:acess-token-1.0.0', stateJSON)
}