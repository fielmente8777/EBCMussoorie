import Gallery from "@/components/GalleryPage/Gallery";
import test from "../../../public/images/03 Dining_11zon.jpg";
import test2 from "../../../public/images/29 Exterior_11zon.jpg";
import test3 from "../../../public/images/23 Facade_11zon.jpg";

const galleryData = {
  items: [
    {
      Category: "camper room",
      Images: [test, test2, test3],
      Required: true,
    },
    {
      Category: "glamper room",
      Images: [test2, test, test, test],
      Required: true,
    },
    {
      Category: "Surveyor room",
      Images: [test3, test, test, test],
      Required: true,
    },
    { Category: "Events", Images: [test, test, test, test], Required: true },
    { Category: "Events", Images: [test, test, test, test], Required: true },
    { Category: "Events", Images: [test, test, test, test], Required: true },
  ],
};

const page = () => {
  return (
    <div className="bg-white">
      <Gallery {...galleryData} />
    </div>
  );
};

export default page;
