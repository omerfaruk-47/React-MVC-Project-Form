import axios from "axios";

// Veri ile alakalı  her türlü yapıyı model de tanımlarız
//model oluştruruken genelde classları tercih ederiz

export default class ListModel {
  //apiden post verilerini alıp döndüren fonksiyon

  async getPosts() {
    try {
      const res = await axios.get("http://localhost:3000/posts");

      return res.data;
    } catch (err) {
      alert("Üzgünüz bir hata oluştu");
      console.log(err);
    }
  }
}
