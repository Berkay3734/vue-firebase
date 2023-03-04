<template>
    <main class="form-signin m-auto w-100">
    <div class="row">
        <div class="col-12">
            <button v-show="!kullanici" @click="handleLogin" class="btn btn-primary"><i class="bi bi-google"></i> ile Giriş</button>
        </div>
    </div>
    </main>
</template>
<script>
import { auth } from '../firebase/config'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {useRouter} from 'vue-router'

export default{
    setup() {
        const router = useRouter()
        const handleLogin =()=>{
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth,provider).then(sonuc=>{
                router.push({name:'Home'})
            })
        }
        return {handleLogin}
    },
}
</script>

<style scoped>
    .form-signin{
        width: 100vh;
        height: 100vh;
        border: 1px solid black;
    }
    .row{
        text-align: center;
        margin-top: 10%;
    }
</style>