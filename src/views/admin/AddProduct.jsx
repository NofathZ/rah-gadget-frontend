// Dependency
import { useState } from "react";

// Component
import Admin from "../../layout/Admin";

// Asset
import AddImgIcon from "../../assets/icon/add-img.svg";

export default function AddProduct() {
  const [spesification, setSpesification] = useState({
    desain: {
      placeholder: "cth: Desain",
      data: ["", ""],
    },
    storage: {
      placeholder: "cth: Storage",
      data: ["", ""],
    },
    performa: {
      placeholder: "cth: Performa",
      data: ["", ""],
    },
    layar: {
      placeholder: "cth: Layar",
      data: ["", ""],
    },
    fitur: {
      placeholder: "cth: Fitur",
      data: ["", "", ""],
    },
    port: {
      placeholder: "cth: Port",
      data: ["", "", "", "", ""],
    },
    opsiUpgrade: {
      placeholder: "cth: Opsi Upgrade",
      data: ["", ""],
    },
    baterai: {
      placeholder: "cth: Baterai",
      data: [""],
    },
  });

  return (
    <Admin>
      <div className="py-10 pl-6 pr-10">
        <div className="bg-system-white p-4 mb-10">
          <section className="mb-6">
            <h2 className="font-work-sans text-system-black title-2 mb-4">
              Detail Laptop
            </h2>
            <p className="font-work-sans text-system-black body-1 mb-1">
              Nama Laptop
            </p>
            <input
              type="text"
              className="border border-system-black text-sm rounded w-full p-4 placeholder:text-system-grey focus:outline-none font-work-sans body-1"
              placeholder="cth: Dell XP 14 Series"
              required
            />
          </section>
          <section className="mb-6">
            <p className="font-work-sans text-system-black body-1 mb-1">
              Kategori Laptop
            </p>
            <div
              className="grid"
              style={{ gridTemplateColumns: "repeat(3, 240px)" }}
            >
              <span className="font-work-sans text-system-black body-1 mr-4 flex justify-start items-center">
                <input className="mr-2" type="checkbox" id="editing" />
                <label htmlFor="editing">Editing</label>
              </span>
              <span className="font-work-sans text-system-black body-1 mr-4 flex justify-start items-center">
                <input className="mr-2" type="checkbox" id="gaming" />
                <label htmlFor="gaming">Gaming</label>
              </span>
              <span className="font-work-sans text-system-black body-1 mr-4 flex justify-start items-center">
                <input className="mr-2" type="checkbox" id="desain" />
                <label htmlFor="desain">Desain</label>
              </span>
            </div>
          </section>
          <section className="mb-6">
            <p className="font-work-sans text-system-black body-1 mb-1">
              Foto Produk
            </p>
            <div className="flex border-b-2 border-solid border-system-black pb-6 border-opacity-20">
              <div className="mr-2">
                <label
                  htmlFor="gambar-1"
                  className="inline-block border border-dashed border-system-black rounded"
                  style={{ width: "120px", height: "120px" }}
                >
                  <div className="w-full h-full flex justify-center items-center flex-col font-work-sans body-2 text-system-grey">
                    <img
                      src={AddImgIcon}
                      width={24}
                      height={24}
                      alt="add-img"
                    />
                    <p className="mt-1">Thumbnail</p>
                  </div>
                </label>
                <input id="gambar-1" className="hidden" type="file" />
              </div>
              <div className="mr-2">
                <label
                  htmlFor="gambar-1"
                  className="inline-block border border-dashed border-system-black rounded"
                  style={{ width: "120px", height: "120px" }}
                >
                  <div className="w-full h-full flex justify-center items-center flex-col font-work-sans body-2 text-system-grey">
                    <img
                      src={AddImgIcon}
                      width={24}
                      height={24}
                      alt="add-img"
                    />
                  </div>
                </label>
                <input id="gambar-1" className="hidden" type="file" />
              </div>
              <div className="mr-2">
                <label
                  htmlFor="gambar-1"
                  className="inline-block border border-dashed border-system-black rounded"
                  style={{ width: "120px", height: "120px" }}
                >
                  <div className="w-full h-full flex justify-center items-center flex-col font-work-sans body-2 text-system-grey">
                    <img
                      src={AddImgIcon}
                      width={24}
                      height={24}
                      alt="add-img"
                    />
                  </div>
                </label>
                <input id="gambar-1" className="hidden" type="file" />
              </div>
              <div className="mr-2">
                <label
                  htmlFor="gambar-1"
                  className="inline-block border border-dashed border-system-black rounded"
                  style={{ width: "120px", height: "120px" }}
                >
                  <div className="w-full h-full flex justify-center items-center flex-col font-work-sans body-2 text-system-grey">
                    <img
                      src={AddImgIcon}
                      width={24}
                      height={24}
                      alt="add-img"
                    />
                  </div>
                </label>
                <input id="gambar-1" className="hidden" type="file" />
              </div>
              <div className="mr-2">
                <label
                  htmlFor="gambar-1"
                  className="inline-block border border-dashed border-system-black rounded"
                  style={{ width: "120px", height: "120px" }}
                >
                  <div className="w-full h-full flex justify-center items-center flex-col font-work-sans body-2 text-system-grey">
                    <img
                      src={AddImgIcon}
                      width={24}
                      height={24}
                      alt="add-img"
                    />
                  </div>
                </label>
                <input id="gambar-1" className="hidden" type="file" />
              </div>
            </div>
          </section>
          <section className="mb-6">
            <h2 className="font-work-sans text-system-black title-2 mb-4">
              Harga Laptop
            </h2>
            <p className="font-work-sans text-system-black body-1 mb-1">
              Harga Asli
            </p>
            <input
              type="text"
              className="border border-system-black text-sm rounded w-full p-4 placeholder:text-system-grey focus:outline-none font-work-sans body-1"
              placeholder="Rp  0"
              required
            />
          </section>
          <section
            className="mb-6 grid border-b-2 border-solid border-system-black pb-6 border-opacity-20"
            style={{
              gridTemplateColumns: "120px 120px auto",
              columnGap: "16px",
            }}
          >
            <div>
              <p className="font-work-sans text-system-black body-1 mb-1">
                Diskon
              </p>
              <input
                type="text"
                className="w-full border border-system-black text-sm rounded p-4 placeholder:text-system-grey focus:outline-none"
                placeholder="cth: 50"
                min={1}
                max={100}
                required
              />
            </div>
            <p className="font-work-sans text-system-black body-1 mb-1 font-bold flex justify-center items-center">
              Harga Menjadi
            </p>
            <div>
              <p className="font-work-sans text-system-grey body-1 mb-1">
                Harga Diskon
              </p>
              <input
                type="text"
                className="w-full border border-system-black text-sm rounded p-4 placeholder:text-system-grey focus:outline-none"
                placeholder="Rp  9.000.000"
                readOnly
              />
            </div>
          </section>
          <section className="mb-6 border-b-2 border-solid border-system-black pb-6 border-opacity-20">
            <h2 className="font-work-sans text-system-black title-2 mb-4">
              Affiliate Link
            </h2>
            <div className="mb-4">
              <p className="font-work-sans text-system-black body-1 mb-1">
                URL Tokopedia
              </p>
              <input
                type="text"
                className="w-full border border-system-black text-sm rounded p-4 placeholder:text-system-grey focus:outline-none"
                placeholder="cth: tokopedia.com"
                required
              />
            </div>
            <div>
              <p className="font-work-sans text-system-black body-1 mb-1">
                URL Shopee
              </p>
              <input
                type="text"
                className="w-full border border-system-black text-sm rounded p-4 placeholder:text-system-grey focus:outline-none"
                placeholder="cth: shopee.com"
                required
              />
            </div>
          </section>
          <section className="mb-6 border-b-2 border-solid border-system-black pb-6 border-opacity-20">
            <h2 className="font-work-sans text-system-black title-2 mb-4">
              Ulasan Laptop
            </h2>
            <div className="mb-4">
              <p className="font-work-sans text-system-black body-1 mb-1">
                URL Youtube
              </p>
              <input
                type="text"
                className="w-full border border-system-black text-sm rounded p-4 placeholder:text-system-grey focus:outline-none"
                placeholder="cth: youtube.com"
                required
              />
            </div>
            <div className="mb-4">
              <p className="font-work-sans text-system-black body-1 mb-1">
                Heading Deskripsi
              </p>
              <input
                type="text"
                className="w-full border border-system-black text-sm rounded p-4 placeholder:text-system-grey focus:outline-none"
                placeholder="cth: Cocok untuk kamu yang cari laptop kuliah"
                required
              />
            </div>
            <div>
              <p className="font-work-sans text-system-black body-1 mb-1">
                Deskripsi Singkat
              </p>
              <input
                type="text"
                className="w-full border border-system-black text-sm rounded p-4 placeholder:text-system-grey focus:outline-none"
                placeholder="cth: Laptop ini cocok buat kamu yang cari laptop ringan dan elegan... "
                required
              />
            </div>
          </section>
          <section>
            <h2 className="font-work-sans text-system-black title-2 mb-4">
              Spesifikasi
            </h2>
            <div
              className="grid mb-6"
              style={{ gridTemplateColumns: "1fr 1fr", columnGap: "16px" }}
            >
              <div>
                <p className="font-work-sans text-system-black body-1 mb-1">
                  Desain
                </p>
                {spesification.desain.data.map((value, idx) => (
                  <input
                    key={idx}
                    type="text"
                    className="w-full border border-system-black text-sm rounded p-4 mb-1 placeholder:text-system-grey focus:outline-none"
                    placeholder={`${spesification.desain.placeholder} ${
                      idx + 1
                    }`}
                    required
                  />
                ))}
              </div>
              <div>
                <p className="font-work-sans text-system-black body-1 mb-1">
                  Storage
                </p>
                {spesification.storage.data.map((value, idx) => (
                  <input
                    key={idx}
                    type="text"
                    className="w-full border border-system-black text-sm rounded p-4 mb-1 placeholder:text-system-grey focus:outline-none"
                    placeholder={`${spesification.storage.placeholder} ${
                      idx + 1
                    }`}
                    required
                  />
                ))}
              </div>
            </div>
            <div
              className="grid mb-6"
              style={{ gridTemplateColumns: "1fr 1fr", columnGap: "16px" }}
            >
              <div>
                <p className="font-work-sans text-system-black body-1 mb-1">
                  Performa
                </p>
                {spesification.performa.data.map((value, idx) => (
                  <input
                    key={idx}
                    type="text"
                    className="w-full border border-system-black text-sm rounded p-4 mb-1 placeholder:text-system-grey focus:outline-none"
                    placeholder={`${spesification.performa.placeholder} ${
                      idx + 1
                    }`}
                    required
                  />
                ))}
              </div>
              <div>
                <p className="font-work-sans text-system-black body-1 mb-1">
                  Layar
                </p>
                {spesification.layar.data.map((value, idx) => (
                  <input
                    key={idx}
                    type="text"
                    className="w-full border border-system-black text-sm rounded p-4 mb-1 placeholder:text-system-grey focus:outline-none"
                    placeholder={`${spesification.layar.placeholder} ${
                      idx + 1
                    }`}
                    required
                  />
                ))}
              </div>
            </div>
            <div
              className="grid mb-6"
              style={{ gridTemplateColumns: "1fr 1fr", columnGap: "16px" }}
            >
              <div>
                <p className="font-work-sans text-system-black body-1 mb-1">
                  Fitur
                </p>
                {spesification.fitur.data.map((value, idx) => (
                  <input
                    key={idx}
                    type="text"
                    className="w-full border border-system-black text-sm rounded p-4 mb-1 placeholder:text-system-grey focus:outline-none"
                    placeholder={`${spesification.fitur.placeholder} ${
                      idx + 1
                    }`}
                    required
                  />
                ))}
              </div>
              <div>
                <p className="font-work-sans text-system-black body-1 mb-1">
                  Port
                </p>
                {spesification.port.data.map((value, idx) => (
                  <input
                    key={idx}
                    type="text"
                    className="w-full border border-system-black text-sm rounded p-4 mb-1 placeholder:text-system-grey focus:outline-none"
                    placeholder={`${spesification.port.placeholder} ${idx + 1}`}
                    required
                  />
                ))}
              </div>
            </div>
            <div
              className="grid"
              style={{ gridTemplateColumns: "1fr 1fr", columnGap: "16px" }}
            >
              <div>
                <p className="font-work-sans text-system-black body-1 mb-1">
                  Opsi Upgrade
                </p>
                {spesification.opsiUpgrade.data.map((value, idx) => (
                  <input
                    key={idx}
                    type="text"
                    className="w-full border border-system-black text-sm rounded p-4 mb-1 placeholder:text-system-grey focus:outline-none"
                    placeholder={`${spesification.opsiUpgrade.placeholder} ${
                      idx + 1
                    }`}
                    required
                  />
                ))}
              </div>
              <div>
                <p className="font-work-sans text-system-black body-1 mb-1">
                  Baterai
                </p>
                {spesification.baterai.data.map((value, idx) => (
                  <input
                    key={idx}
                    type="text"
                    className="w-full border border-system-black text-sm rounded p-4 mb-1 placeholder:text-system-grey focus:outline-none"
                    placeholder={`${spesification.baterai.placeholder} ${
                      idx + 1
                    }`}
                    required
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
        <button class="w-full bg-system-grey text-system-white rounded font-work-sans title-3 py-3">
          Unggah Rekomendasi Laptop
        </button>
      </div>
    </Admin>
  );
}
