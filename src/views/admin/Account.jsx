// Component
import Admin from "../../layout/Admin";

export default function Account() {
  return (
    <Admin>
      <div className="py-10 pl-20 pr-10">
        <div className="bg-system-white p-4 mb-10">
          <section className="border-b-2 border-solid border-system-black pb-6 mb-6 border-opacity-20">
            <h2 className="font-work-sans text-system-black title-2 mb-4">
              Detail Laptop
            </h2>
            <p className="font-work-sans text-system-black body-1 mb-1">
              Username
            </p>
            <input
              type="text"
              className="border border-system-black text-sm rounded w-full p-4 mb-6 placeholder:text-system-grey focus:outline-none font-work-sans body-1"
              value={"AdminRahGadget"}
              placeholder={"cth: Admin"}
              required
            />
            <button class="w-full bg-brand-tertiary text-system-white rounded font-work-sans title-3 py-3">
              Ganti Password
            </button>
          </section>
          <section>
            <h2 className="font-work-sans text-system-black title-2 mb-4">
              Informasi Kontak
            </h2>
            <p className="font-work-sans text-system-black body-1 mb-1">
              Email
            </p>
            <input
              type="text"
              className="border border-system-black text-sm rounded w-full p-4 mb-6 placeholder:text-system-grey focus:outline-none font-work-sans body-1"
              value={"rahgadgetss@gmail.com"}
              placeholder={"cth: admin@gmail.com"}
              required
            />
            <div
              className="grid"
              style={{ gridTemplateColumns: "1fr 1fr", columnGap: "16px" }}
            >
              <div>
                <p className="font-work-sans text-system-black body-1 mb-1">
                  Nama Profil Instagram
                </p>
                <input
                  type="text"
                  className="border border-system-black text-sm rounded w-full p-4 mb-6 placeholder:text-system-grey focus:outline-none font-work-sans body-1"
                  placeholder={"cth: rggadget01AdminRahGadget"}
                  required
                />
              </div>
              <div>
                <p className="font-work-sans text-system-black body-1 mb-1">
                  URL Profil Instagram
                </p>
                <input
                  type="text"
                  className="border border-system-black text-sm rounded w-full p-4 mb-6 placeholder:text-system-grey focus:outline-none font-work-sans body-1"
                  placeholder={"cth: insta/rggadget"}
                  required
                />
              </div>
            </div>
            <div
              className="grid"
              style={{ gridTemplateColumns: "1fr 1fr", columnGap: "16px" }}
            >
              <div>
                <p className="font-work-sans text-system-black body-1 mb-1">
                  Nama Channel Youtube
                </p>
                <input
                  type="text"
                  className="border border-system-black text-sm rounded w-full p-4 mb-6 placeholder:text-system-grey focus:outline-none font-work-sans body-1"
                  placeholder={"cth: Rah Gadget"}
                  required
                />
              </div>
              <div>
                <p className="font-work-sans text-system-black body-1 mb-1">
                  URL Channel Youtube
                </p>
                <input
                  type="text"
                  className="border border-system-black text-sm rounded w-full p-4 mb-6 placeholder:text-system-grey focus:outline-none font-work-sans body-1"
                  placeholder={"cth: yutube/rahgadget"}
                  required
                />
              </div>
            </div>
          </section>
        </div>
        <button class="w-full bg-brand-tertiary text-system-white rounded font-work-sans title-3 py-3">
          Simpan Informasi
        </button>
      </div>
    </Admin>
  );
}
