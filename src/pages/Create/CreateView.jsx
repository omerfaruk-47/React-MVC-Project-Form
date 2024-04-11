const CreateView = ({ handleSubmit }) => {
  return (
    <div className=" h-[90vh] grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-10 w-3/4 max-w-[700px] p-10 md:p-20 rounded-lg bg-black"
      >
        <h1 className="text-center text-xl">Yeni Gönderi Oluştur</h1>
        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium">Kullanıcı Adı</label>
          <input
            required
            name="user"
            type="text"
            placeholder="ör:ömer..."
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium">Başlık</label>
          <input
            required
            name="title"
            type="text"
            placeholder="ör:Reacta soru yaşıyorum"
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium">Açıklama</label>
          <textarea
            required
            name="text"
            type="text"
            placeholder="..."
            className="max-h-[300px] min-h-[150px] bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full "
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500  p-2 rounded-lg transition hover:bg-yellow-600"
        >
          {" "}
          Oluştur
        </button>
      </form>
    </div>
  );
};

export default CreateView;
