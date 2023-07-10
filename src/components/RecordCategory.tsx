import MyRecommend1 from "/assets/images/MyRecommend-1.jpg";
import MyRecommend2 from "/assets/images/MyRecommend-2.jpg";
import MyRecommend3 from "/assets/images/MyRecommend-3.jpg";

interface Iprops {
  name: string;
  description: string;
  type: string;
}
function RecordCategory(props: Iprops) {
  const { name, description, type } = props;
  return (
    <div className="RecordCategory w-[288px] h-[288px] bg-yellow-400 p-6">
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
          className="w-[240px] h-[240px]"
        />
        <div className="absolute top-0 left-0 w-[240px] h-[240px] bg-black opacity-70"></div>
        <div className="text-center absolute top-[40%] w-full">
          <div className="uppercase text-primary-300 text-2xl pb-2">{name}</div>
          <div className="flex justify-center">
            <div className="w-[160px] border border-primary-300 bg-primary-400 text-white text-center text-sm">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordCategory;
