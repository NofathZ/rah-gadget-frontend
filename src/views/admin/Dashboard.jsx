// Component
import Admin from "../../layout/Admin";

// Assets
import TrashIcon from "../../assets/icon/trash.svg";

const PlusIcon = ({ width, color }) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.383 3.007L12.5 3C12.7449 3.00003 12.9813 3.08996 13.1644 3.25272C13.3474 3.41547 13.4643 3.63975 13.493 3.883L13.5 4V11H20.5C20.7449 11 20.9813 11.09 21.1644 11.2527C21.3474 11.4155 21.4643 11.6397 21.493 11.883L21.5 12C21.5 12.2449 21.41 12.4813 21.2473 12.6644C21.0845 12.8474 20.8603 12.9643 20.617 12.993L20.5 13H13.5V20C13.5 20.2449 13.41 20.4813 13.2473 20.6644C13.0845 20.8474 12.8603 20.9643 12.617 20.993L12.5 21C12.2551 21 12.0187 20.91 11.8356 20.7473C11.6526 20.5845 11.5357 20.3603 11.507 20.117L11.5 20V13H4.5C4.25507 13 4.01866 12.91 3.83563 12.7473C3.65259 12.5845 3.53566 12.3603 3.507 12.117L3.5 12C3.50003 11.7551 3.58996 11.5187 3.75272 11.3356C3.91547 11.1526 4.13975 11.0357 4.383 11.007L4.5 11H11.5V4C11.5 3.75507 11.59 3.51866 11.7527 3.33563C11.9155 3.15259 12.1397 3.03566 12.383 3.007Z"
        fill={color}
      />
    </svg>
  );
};

export default function Dashboard() {
  return (
    <Admin>
      <div className="py-10 pl-6 pr-10">
        <section className="mb-10">
          <h2 className="font-work-sans text-system-black title-2 mb-4">
            Rekap Postingan
          </h2>
          <div className="bg-system-white py-2 px-4 rounded-lg">
            <p className="font-work-sans text-system-black body-1 text-right">
              Total Laptop
            </p>
            <h2 className="font-work-sans text-system-black title-2 text-right">
              120
            </h2>
          </div>
        </section>
        <section>
          <div
            className="grid mb-4"
            style={{
              gridTemplateColumns: "auto 280px",
              gridTemplateRows: "48px",
              columnGap: "16px",
            }}
          >
            <h2 className="font-work-sans text-system-black title-2 mb-4">
              List Laptop
            </h2>
            <button className="bg-brand-tertiary text-system-white font-work-sans title-3 rounded flex justify-center items-center">
              <PlusIcon width={24} color={"#FFFFFF"} />
              <p className="ml-2">Tambah Laptop</p>
            </button>
          </div>
          <div
            className="grid mb-4"
            style={{
              gridTemplateColumns: "auto 280px",
              gridTemplateRows: "48px",
              columnGap: "16px",
            }}
          >
            <select className="select-category px-4 py-3 !bg-transparent text-brand-tertiary font-work-sans title-3 rounded border border-brand-tertiary border-solid">
              <option
                className="inline-block py-10"
                style={{ height: "50px" }}
                value="7 Jutaan"
              >
                7 Jutaan
              </option>
              <option value="7 Jutaan">7 Jutaan</option>
            </select>
            <button className="bg-transparent text-brand-tertiary font-work-sans title-3 rounded border border-brand-tertiary border-solid flex justify-center items-center">
              <PlusIcon width={24} color={"#41199E"} />
              <p className="ml-2">Tambah Kategori Harga</p>
            </button>
          </div>
        </section>
        <section className="overflow-hidden rounded-lg">
          <span
            className="grid bg-system-grey"
            style={{
              gridTemplateColumns: "75px 400px 240px 160px 190px auto",
              minHeight: "56px",
            }}
          >
            <div className="px-2 font-work-sans text-system-white title-3 w-full h-full flex justify-center items-center">
              No
            </div>
            <div className="px-2 font-work-sans text-system-white title-3 w-full h-full flex justify-start items-center">
              Nama Laptop
            </div>
            <div className="px-2 font-work-sans text-system-white title-3 w-full h-full flex justify-start items-center">
              Kategori Laptop
            </div>
            <div className="px-2 font-work-sans text-system-white title-3 w-full h-full flex justify-start items-center">
              Title
            </div>
            <div className="px-2 font-work-sans text-system-white title-3 w-full h-full flex justify-start items-center">
              Harga Diskon
            </div>
          </span>
          <span
            className="grid bg-system-white"
            style={{
              gridTemplateColumns: "75px 400px 240px 160px 190px auto",
              minHeight: "56px",
            }}
          >
            <div className="px-2 font-work-sans text-system-black body-1 w-full h-full flex justify-center items-center">
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
            <div className="px-2 font-work-sans text-system-black body-1 w-full h-full flex justify-start items-center">
              Harga Diskon
            </div>
            <div className="px-2 font-work-sans text-system-black body-1 w-full h-full flex justify-end items-center">
              <div
                className="p-3 bg-semantic-error rounded"
                style={{ width: "48px", height: "48px" }}
              >
                <img src={TrashIcon} width={24} height={24} alt="trash" />
              </div>
            </div>
          </span>
        </section>
      </div>
    </Admin>
  );
}
