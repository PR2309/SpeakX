const backgroundStyle = {
    backgroundImage: "url('/images/homeBg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -10000
};

const BackGround = () => {
    return (
        <>
            <div style={backgroundStyle}>

            </div>
        </>
    );
}
export default BackGround;