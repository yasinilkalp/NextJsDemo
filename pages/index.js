function HomePage() {
  return (
    <>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            EF Core ile SQL Server HierarchyId Kullanımı
          </h1>
          <p>
            Hiyerarşik yapıları sıklıkla bir ParentID yardımıyla kullanırız.
            Parent/Child ilişkisi hemen hemen tüm projelerimde ihtiyaç duyduğum
            ve her seferinde refactor ederek yeniden yazdığım bir yapıdır.
            HierarchyId veri tipiyle tanışana kadar böyleydi. Bu yazı da sizlere
            HierarchyId veri tipini EF Core ile kullanımından bahsedeceğim.
          </p>
          <p>
            HierarchyId veri tipi hiyerarşik verileri saklamak için kullanılır.
            Bu yazımızda da örnek olarak kullanacağımız kategori ağacını ele
            alalım.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-6 p-4">
        <img
          src="https://miro.medium.com/max/1742/1*OrO3VwZHLiRGlcTOHQeGiw.png"
          className="mx-auto"
        />
      </div>
    </>
  )
}

export default HomePage
