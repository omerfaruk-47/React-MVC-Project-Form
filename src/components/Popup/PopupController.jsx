import { useEffect, useState } from "react";
import PopupView from "./PopupView";
import PopupModel from "./PopupModel";

const PopupController = ({ user, close }) => {
  //dönderileri vieww gönderebilmek için statede tutacaz
  const [userPosts, setUserPosts] = useState([]);

  //modelden örnek aluşturma
  const model = new PopupModel();

  //pencere açıldığında kullanıcının gönderilerini alıyoruz
  useEffect(() => {
    model.getUserPosts(user).then((data) => setUserPosts(data));
  }, []);
  return <PopupView userPosts={userPosts} user={user} close={close} />;
};

export default PopupController;
