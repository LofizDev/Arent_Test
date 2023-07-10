interface Iprops {
  date: string;
  time: string;
  content: string;
}
function MyDiary(props: Iprops) {
  const { date, time, content } = props;
  return (
    <div className="MyDiary border-2 border-gray-400 w-[231px] p-4">
      <div className="text-lg">{date}</div>
      <div className="text-lg pb-2">{time}</div>
      <div className="text-sm">{content}</div>
    </div>
  );
}

export default MyDiary;
