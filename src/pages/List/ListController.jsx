import { useEffect, useState } from "react";
import ListView from "./ListView";
import ListModel from "./ListModel";

const ListController = () => {
  //stateler
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  //classtan bir örnek oluşturduk classın içindeki fonsk
  //erişebilmek için.
  const model = new ListModel();

  //useEffect ile kullanıcı etkileşim izlediğimizden controller dosyasında tanımlarız
  useEffect(() => {
    model.getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <ListView
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      posts={posts}
    />
  );
};

export default ListController;
