import cup from "/assets/cup.svg";
import knife from "/assets/knife.svg";
import linearHexagon from "/assets/linearHexagon.svg";
interface Iprops {
  name: string,
  type: string,
  onClick?: () => void
}
function Hexagon(props: Iprops) {
  const { name, type, onClick } = props
  return (
    <div onClick={() => onClick()} className="Hexagon relative cursor-pointer">
      <img src={linearHexagon} alt="linearHexagon" />
      {type == 'cup' && <img src={cup} alt="cup" className="absolute top-[24px] left-[30px]" />}
      {type == 'knife' && <img src={knife} alt="knife" className="absolute top-[24px] left-[30px]" />}
      <p className="absolute top-[80px] text-white text-xl w-[116px] text-center">{name}</p>
    </div>
  );
}

export default Hexagon;
