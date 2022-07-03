export const apiLockeDex = 'https://api.lockedex.pekexperto.com/'
export const endpoint = {
    register : 'user/register',
    login : 'user/login'
}
export const headers = {
    register : { 
        headers: {
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json' }//,
            // whitCredentials : true 
        }
    },
    login : { 
        headers: {
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json' }//,
            // whitCredentials : true 
        }
    }
}