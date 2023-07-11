import MyRecommend1 from "/assets/images/MyRecommend-1.jpg";
import MyRecommend2 from "/assets/images/MyRecommend-2.jpg";
import MyRecommend3 from "/assets/images/MyRecommend-3.jpg";

interface Iprops {
  name: string;
  description: string;
  type: string;
  label?: string;
}
function RecordCategory(props: Iprops) {
  const { name, description, type } = props;
  return (
    <a href={`#${props.label}`} className="RecordCategory w-full object-cover h-[288px] bg-yellow-400 p-6">
      <div className="relative">
        <img
          src={
            type == "1"
              ? MyRecommend1
              : type == "2"
                ? MyRecommend2
                : MyRecommend3
          }
          alt="My-Recommend"
          className="w-full h-[240px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-[240px] bg-black opacity-70"></div>
        <div className="text-center absolute top-[40%] w-full">
          <div className="uppercase text-primary-300 text-2xl pb-2">{name}</div>
          <div className="flex justify-center">
            <div className="w-[160px] border border-primary-300 bg-primary-400 text-white text-center text-sm">
              {description}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default RecordCategory;
