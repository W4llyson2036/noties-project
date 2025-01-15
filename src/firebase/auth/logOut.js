// firebase
import { auth }     from '../firebaseConfig.js'
import { signOut }  from 'firebase/auth'

export async function logout(deleQuery) {
    try {
        await signOut(auth);
    } catch (error) {
        console.log('Error, Nenhum usuário está autenticado.');
    }    
}