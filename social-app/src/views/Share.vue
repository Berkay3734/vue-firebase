<template>
        <section class="main-content">
		<div class="container">
			<h1>Yorum Paylaş</h1>
			<br>
			<br>
            <div class="mb-3">
                <label for="exampleFormControInput1" class="form-label">Yorum Yap</label>
                <input type="text" class="form-control" id="exampleFromControlInput1" v-model="gonderi" placeholder="Yapıcı Eleştirilere Açığım">
            </div>
        <div class="mb-3 text-center">
            <button @click="handleClick" type="button" class="btn btn-dark">Gönder</button>
        </div>
			<div class="row" v-for="g in gonderiler" :key="g.id">
				<div class="col-sm-6 col-md-6 col-lg-4">
					<div class="card bg-white p-3 mb-4 shadow">
						<div class="d-flex justify-content-between mb-4">
							<div class="user-info">
								<div class="user-info__img">
									<img src="img/user1.jpg" alt="User Img">
								</div>
								<div class="user-info__basic">
									<h5 class="mb-0">{{ g.username }}</h5>
									<p class="text-muted mb-0">{{ g.tel }}</p>
								</div>
							</div>
							<div class="dropdown open">
								<a href="#!" class="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i class="fa fa-ellipsis-v"></i>
								</a>
								<div class="dropdown-menu" aria-labelledby="triggerId1">
									<a class="dropdown-item text-danger" @click="handleDelete(g.id)"><i class="fa fa-trash mr-1"></i> Delete</a>
								</div>
							</div>
						</div>
						<h6 class="mb-0">{{ g.gonderi }}</h6>
						<div class="d-flex justify-content-between mt-4">
							<div>
								<h5 class="mb-0">
									<small class="ml-1">{{ g.tarih }}</small>
								</h5>
							</div>
							<span class="text-success font-weight-bold">Online</span>
						</div>
					</div>
				</div>
            </div>
		</div>
	</section>
</template>
<script>

import {ref,onMounted} from 'vue'
import getUser from '@/conposible/getUser';
import {addDoc,collection,serverTimestamp,onSnapshot,query,where,deleteDoc,doc} from 'firebase/firestore'
import {db} from '../firebase/config'
import moment from 'moment'

export default {
    setup() {
        const {kullanici,kAdi} = getUser()
        const gonderi = ref('')
        const gonderiler = ref([])
        moment.locale('tr')
        const handleClick = async () =>{
            if (kullanici.value) {
                await addDoc(collection(db,'gonderiler'),{
                    gKullaniciAd: kullanici.value.displayName,
                    gonderi: gonderi.value,
                    tarih:serverTimestamp(),
                    username: kAdi.value.displayName,
                    tel: "05** *** ** **",
                })
                gonderi.value = ''

            }
        }
        const handleDelete = async (id) =>{
            await deleteDoc(doc(db,'gonderiler',id))    
        }
        onMounted(()=>{
            const q = query(collection(db,'gonderiler'),where("gKullaniciAd","==",kullanici.value.displayName))

            onSnapshot(q,querySnapshot=>{
                const dizi=[];
                querySnapshot.forEach(doc=>{
                    dizi.push({...doc.data(),id:doc.id,tarih:moment(doc.data().tarih.toDate()).format('LLL')})
                })
                gonderiler.value=dizi;
            })
          
        })
        return {gonderi,handleClick,gonderiler,handleDelete}
    },
}
</script>




<style scoped>

</style>