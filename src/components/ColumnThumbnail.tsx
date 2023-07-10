import column1 from "/assets/images/column-1.jpg";
import column2 from "/assets/images/column-2.jpg";
import column3 from "/assets/images/column-3.jpg";
import column4 from "/assets/images/column-4.jpg";
import column5 from "/assets/images/column-5.jpg";
import column6 from "/assets/images/column-6.jpg";
import column7 from "/assets/images/column-7.jpg";
import column8 from "/assets/images/column-8.jpg";

interface Iprops {
  name: string;
  time: string;
  type: string;
}
function ColumnThumbnail(props: Iprops) {
  const { name, time, type } = props;
  let image = "1";
  switch (type) {
    case "1":
      image = column1;
      break;
    case "2":
      image = column2;
      break;
    case "3":
      image = column3;
      break;
    case "4":
      image = column4;
      break;
    case "5":
      image = column5;
      break;
    case "6":
      image = column6;
      break;
    case "7":
      image = column7;
      break;
    case "8":
      image = column8;
      break;
    default:
      break;
  }
  return (
    <div className="ColumnThumbnail w-[234px] h-[144px] relative pr-2">
      <div className="relative">
        <img
          src={image}
          alt="column-thumbnail"
          className="w-[234px] h-[144px] object-cover"
        />
        <div className="absolute bottom-0 border border-primary-300 bg-primary-300 text-white px-1">{time}</div>
      </div>
      <div className="text-sm py-1">{name}</div>
      <div className="text-sm text-primary-400 pb-1">#魚料理  #和食  #DHA</div>
    </div>
  );
}

export default ColumnThumbnail;
