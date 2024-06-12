import Banner from "@/components/landingpage/Banner"
import BannerImage from "../../../public/images/00 Cover_11zon.jpg"
const page = () => {
    return (
        <div className="flex flex-col gap-10">
            <Banner BannerImage={BannerImage} />
        </div>
    )
}

export default page