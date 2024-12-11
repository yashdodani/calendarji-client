import { useState } from "react";
import Content from "./Content";
import Header from "./Header";

function Home() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Header setShowModal={setShowModal} />
            <Content showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}

export default Home;
