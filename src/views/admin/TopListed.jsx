// Component
import Admin from "../../layout/Admin";

// Assets
import TrashIcon from "../../assets/icon/trash.svg";
import PencilIcon from "../../assets/icon/pencil.svg"

export default function TopListed() {
  return (
    <Admin>
      <div className="py-10 pl-20 pr-10">
        <section className="mb-10 ">
          <h2 className="font-work-sans text-system-black title-2 mb-4">
            Rekomendasi Laptop Pada Homepage
          </h2>
          <select className="w-full select-category px-4 py-3 !bg-transparent text-brand-tertiary font-work-sans title-3 rounded border border-brand-tertiary border-solid">
            <option
              className="inline-block py-10"
              style={{ height: "50px" }}
              value="7 Jutaan"
            >
              7 Jutaan
            </option>
            <option value="7 Jutaan">7 Jutaan</option>
          </select>
        </section>
        <section className="mb-10">
          <h2 className="font-work-sans text-system-black title-2 mb-4">
            Laptop Terbaik di Kelasnya
          </h2>
          <div className="overflow-hidden rounded-lg">
            <span
              className="grid bg-system-grey"
              style={{
                gridTemplateColumns: "160px 400px 240px 147px auto",
                minHeight: "56px",
              }}
            >
              <div className="px-2 font-work-sans text-system-white title-3 w-full h-full flex justify-start items-center">
                Title
              </div>
              <div className="px-2 font-work-sans text-system-white title-3 w-full h-full flex justify-start items-center">
                Nama Laptop
              </div>
              <div className="px-2 font-work-sans text-system-white title-3 w-full h-full flex justify-start items-center">
                Kategori Laptop
              </div>
              <div className="px-2 font-work-sans text-system-white title-3 w-full h-full flex justify-start items-center">
                Harga Diskon
              </div>
            </span>
            <span
              className="grid bg-system-white"
              style={{
                gridTemplateColumns: "160px 400px 240px 147px auto",
                minHeight: "56px",
              }}
            >
              <div className="px-2 font-work-sans text-system-black body-1 w-full h-full flex justify-start items-center">
                1
              </div>
              <div className="px-2 font-work-sans text-system-black body-1 w-full h-full flex justify-start items-center">
                Dell XPS 13 Plus Seri 1980-340A-999
              </div>
              <div className="px-2 font-work-sans text-system-black body-1 w-full h-full flex justify-start items-center">
                Kategori Laptop
              </div>
              <div className="px-2 font-work-sans text-system-black body-1 w-full h-full flex justify-start items-center">
                Title
              </div>
              <div className="px-2 font-work-sans text-system-black body-1 w-full h-full flex justify-end items-center">
                <div
                  className="p-3 bg-semantic-info rounded mr-2"
                  style={{ width: "48px", height: "48px" }}
                >
                  <img src={PencilIcon} width={24} height={24} alt="trash" />
                </div>
                <div
                  className="p-3 bg-semantic-error rounded"
                  style={{ width: "48px", height: "48px" }}
                >
                  <img src={TrashIcon} width={24} height={24} alt="trash" />
                </div>
              </div>
            </span>
          </div>
        </section>
        <section>
          <h2 className="font-work-sans text-system-black title-2 mb-4">
            Laptop Terbaik di Harganya
          </h2>
          <div className="overflow-hidden rounded-lg">
            <span
              className="grid bg-system-grey"
              style={{
                gridTemplateColumns: "160px 400px 240px 147px auto",
                minHeight: "56px",
              }}
            >
              <div className="px-2 font-work-sans text-system-white title-3 w-full h-full flex justify-start items-center">
                Title
              </div>
              <div className="px-2 font-work-sans text-system-white title-3 w-full h-full flex justify-start items-center">
                Nama Laptop
              </div>
              <div className="px-2 font-work-sans text-system-white title-3 w-full h-full flex justify-start items-center">
                Kategori Laptop
              </div>
              <div className="px-2 font-work-sans text-system-white title-3 w-full h-full flex justify-start items-center">
                Harga Diskon
              </div>
            </span>
            <span
              className="grid bg-system-white"
              style={{
                gridTemplateColumns: "160px 400px 240px 147px auto",
                minHeight: "56px",
              }}
            >
              <div className="px-2 font-work-sans text-system-black body-1 w-full h-full flex justify-start items-center">
                1
              </div>
              <div className="px-2 font-work-sans text-system-black body-1 w-full h-full flex justify-start items-center">
                Dell XPS 13 Plus Seri 1980-340A-999
              </div>
              <div className="px-2 font-work-sans text-system-black body-1 w-full h-full flex justify-start items-center">
                Kategori Laptop
              </div>
              <div className="px-2 font-work-sans text-system-black body-1 w-full h-full flex justify-start items-center">
                Title
              </div>
              <div className="px-2 font-work-sans text-system-black body-1 w-full h-full flex justify-end items-center">
                <div
                  className="p-3 bg-semantic-info rounded mr-2"
                  style={{ width: "48px", height: "48px" }}
                >
                  <img src={PencilIcon} width={24} height={24} alt="trash" />
                </div>
                <div
                  className="p-3 bg-semantic-error rounded"
                  style={{ width: "48px", height: "48px" }}
                >
                  <img src={TrashIcon} width={24} height={24} alt="trash" />
                </div>
              </div>
            </span>
          </div>
        </section>
      </div>
    </Admin>
  );
}
