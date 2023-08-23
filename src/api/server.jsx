import axios from "axios";

var url = "http://localhost:8080/api/";

//* product işlemleri

// ürün ekleme
export const createProduct = async (username, body) => {
    var res = await axios.post(url + "createProduct/"+username, body);
    return res;
}
// ürün silme
export const deleteProduct=async(id) => {
    var res = await axios.delete(url + "deleteProduct/" + id);
    return res;
}
// ürün güncelleme
export const updateProduct=async(id,body) => {
    var res=await axios.put(url+"updateProduct/"+id,body);
    return res;
}
// bir mağazaya ait ürünleri getirme
export const getAdminProduct=async(username) => {
    var res=await axios.get(url+"getProducts/"+username);
    return res;
}
// kategoriya göre ürün getirme
export const getCategoryProduct=async(category) => {
    var res=await axios.get(url+"getCategoryProducts/"+category);
    return res;
}



//* Like İşlemleri
// like atma
export const plusLike = async (productId,email) => {
    var res=await axios.post(url+"plusLike/"+productId+"/"+email);
    return res;
}
// like geri alma
export const minusLike = async (productId,email) => {
    var res=await axios.post(url+"minusLike/"+productId+"/"+email);;
    return res;
}
// bir kullanıcının like attığı ürünleri getirme
export const getLikeList = async (email) => {
    var res=await axios.get(url+"getLikeList/"+email);
    return res;
}


//* Yorum işlemleri
// yorum atma
export const addComment = async (email,productId,body) => {
    var res=await axios.post(url+"addComment/"+email+productId,body);
    return res;
}
// bir ürüne ait yorumları getirme
export const getCommentList = async (productId) => {
    var res=await axios.get(url+"getComments/"+productId);
    return res;
}
// yorum silme
export const deleteComment = async (commentId) => {
    var res=await axios.delete(url+"deleteComment/"+commentId);
    return res;
}


//* Kategori işlemleri
// kategori oluşturma
export const createCategory = async (body) => {
    var res=await axios.post(url+"createCategory/",body);
    return res;
}
// kategori silme
export const deleteCategory = async (categoryId) => {
    var res=await axios.delete(url+"deleteCategory/"+categoryId);
    return res;
}
// kategorileri getirme
export const getCategories = async () => {
    var res=await axios.get(url+"getCategories");
    return res;
}


//* Sepet işlemleri
// sepete ekleme
export const addCart = async (email,productId) => {
    var res=await axios.post(url+"addCart/"+email+"/"+productId);
    return res;
}
// sepetten kaldırma
export const deleteCart = async (cartId) => {
    var res=await axios.delete(url+"deleteCart/"+cartId);
    return res;
}
// sepettekilerin listesini getirme
export const getCartList = async (email) => {
    var res=await axios.get(url+"getCarts/"+email);
    return res;
}


//* order işlemleri
// sipariş alma
export const createOrder = async (productId,email,body) => {
    var res=await axios.post(url+"createOrder/"+productId+"/"+email,body);
    return res;
}
// sipariş iptal etme
export const deleteOrder = async (orderId) => {
    var res=await axios.delete(url+"deleteOrder/"+orderId);
    return res;
}
// bir mağazaya ait sipariş listesini getirme
export const getOrderList = async (username) => {
    var res=await axios.get(url+"getOrderList/"+username);
    return res;
}
// bir kullanıcının yaptığı siparişleri getirme
export const getMyOrderList = async (email) => {
    var res=await axios.get(url+"getMyOrderList/"+email);
    return res;
}
// sipariş durumunu güncelleme
export const updateOrderStatus = async (orderId,body) => {
    var res=await axios.post(url+"updateOrderStatus/"+orderId,body);
    return res;
}


//* admin işlemleri
// admin kayıt
// admin giriş



//* user işlemleri
// user kayıt
// user giriş
// user şifremi unuttum







