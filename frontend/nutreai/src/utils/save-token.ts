export function saveToken(token: string){
    const stateJSON = JSON.stringify(token);
    localStorage.setItem('@nutreai:token', stateJSON.replace(/"/g, ""));
}