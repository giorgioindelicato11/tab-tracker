import Api from '@/service/Api'

export default {
    register(credentials) {
        return Api().post('register', credentials)
    }
}


AuthenticationService.register ({
    email : 'example@example.com', 
    password : '123456'
})