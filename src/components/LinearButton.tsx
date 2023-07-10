function LinearButton({ name }: any) {
  return (
    <button
      className="border w-[296px] h-[56px]"
      style={{
        background: "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
      }}
    >
      {name}
    </button>
  );
}

export default LinearButton;
