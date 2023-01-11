import request from './request'
//Unified management of all request path APIs in the project

//register
export const RegisterApi = (params) => request.post('/register', params)

//login
export const LoginApi = (params) => request.post('/login', params)

//To get the list of articles, parameters need to be passed, but it is not mandatory
export const ArticleListApi = (params) => request.get('/article', {params})

//add
export const ArticleAddApi = (params) => request.post('/article/add', params)

//search
export const ArticleSearchApi = (params) => request.get(`/article/${params.id}`)

//update
export const ArticleUpdateApi = (params) => request.put('/article/update', params)

//delete
export const ArticleDelApi = (params) => request.post('/article/remove', params)

//Get user profile
export const GetUserInfoApi = () => request.get('/info')

//modify user profile
export const ChangeUserDataApi = (params) => request.put('/info',params)