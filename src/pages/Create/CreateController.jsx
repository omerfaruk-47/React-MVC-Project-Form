import { v4 } from "uuid";
import CreateView from "./CreateView";
import CreateModel from "./CreateModel";
import { useNavigate } from "react-router-dom";

const CreateController = () => {
  //modelden bir örenk oluşturyoruz
  const model = new CreateModel();
  //navigate kurulumu yaptık
  const navigate = useNavigate();

  //form gönderilince çalışacak olan fonks.
  const handleSubmit = (e) => {
    e.preventDefault();

    //1) inputlardaki verileri alıp bir post nesnesi oluştur
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());

    //2)post nesnesine id değeri ekle
    newPost.id = v4();

    //3)api veriyi kaydet ve anasayfaya yönlendir
    model.createPost(newPost).then(() => navigate("/"));
  };

  //Conrtrollerlar sadece view bileşenlerini döndürür
  return <CreateView handleSubmit={handleSubmit} />;
};

export default CreateController;
