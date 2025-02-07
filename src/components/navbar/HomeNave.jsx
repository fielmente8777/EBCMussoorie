import Container from "../Container";

const HomeNave = () => {
    const navLinks = [
      { name: "home", href: "/" },
      { name: "about Us", href: "/about/" },
      { name: "rooms", href: "/rooms/" },
      { name: "park Cafe", href: "/parkcafe/" },
      { name: "activities", href: "/activities/" },
      { name: "gallery", href: "/gallery/" },
      { name: "blog", href: "/blogs/" },
      { name: "contact us", href: "/contact/" },
    ];
    
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <header className="max-w-[1900px] mx-auto w-full">
            <Container>
                <div className="flex flex-col gap-6 items-center justify-center w-full">
                    {/* upper nav */}
                    <div className=""></div>
                </div>
            </Container>
        </header>
    );
}

export default HomeNave;