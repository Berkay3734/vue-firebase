

import {ref} from 'vue'
import {auth} from '../firebase/config'
import {onAuthStateChanged} from 'firebase/auth'


const kullanici = ref(auth.currentUser)
const kAdi = ref(auth.value)
onAuthStateChanged(auth,k=>{
    kullanici.value=k;
    kAdi.value=k;
})

const getUser=()=>{
    return {kullanici,kAdi}
}
export default getUser