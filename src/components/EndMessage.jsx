import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function EndMessage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const style = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    cursor: "pointer",
    zIndex: "9999",
    fontSize: "2rem",
    backgroundColor: "black",
    color: "#ffffff",
    borderRadius: "100%",
    padding: "10px",
    margin:"5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    display: showScrollToTop ? "block" : "none",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p>
        <b>Yay! You have seen it all</b>
      </p>
      <Link to="#" style={style} onClick={scrollToTop}>
        &uarr;
      </Link>
    </div>
  );
}

export default EndMessage;
