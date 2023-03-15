import axios from "axios";
import Products from '../types/Product';
import User from '../types/User';

const apiClient = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-type": "application/json",
  },
});
// type Product = {
//   id: number;
//   userId : number;
//   title: string;
//   body: string;
// }
// const obj: Product = {
//   id: 0,
//   userId: 0,
//   title: "",
//   body: ""
// };

// type Useraddress = {
//   street: string;
//   city: string;
//   zip: number;
// }
// type User = {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: Useraddress;
//   phone: number | string;
//   website: string
// }

const getProducts = async () => {
  const response = await apiClient.get<Products[]>("/products");
  return response.data;
}

const getProductsDetail = async (id: number | string) => {
  const response = await apiClient.get<Products[]>(`products/${id}`);
  return response.data;
}

const getUser = async (userId:number | string) => {
  const response = await apiClient.get<User[]>(`users/${userId}`);
  return response.data;
}

const Service = {
  getProducts,
  getProductsDetail,
  getUser
}

export default Service;

// export function getProducts() {
//   return axios
//     .get<Product[]>("https://jsonplaceholder.typicode.com/posts", { params: { _sort: "title" } })
//     .then(res => res.data)
// }

// export function getProductsDetail(id: number | string) {
//   return axios
//     .get<Product[]>(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(res => res.data)
// }

// export function getUser(userId:number | string) {
//   return axios
//     .get<User[]>(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then(res => res.data)
// }