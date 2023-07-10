import GoToTopIcon from "/assets/icons/go-to-top.svg";

function GoToTop() {
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="GoToTop"
      onClick={handleGoToTop}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        cursor: "pointer",
      }}
    >
      <img src={GoToTopIcon} alt="go-to-top" />
    </div>
  );
}

export default GoToTop;
