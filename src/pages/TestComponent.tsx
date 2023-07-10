import Hexagon from "../components/Hexagon";
import LinearButton from "../components/LinearButton";
import RecordCategory from "../components/RecordCategory";

function TestComponent() {
  return (
    <div>
      <Hexagon type="knife" name="Morning" />
      <Hexagon type="knife" name="Lunch" />
      <Hexagon type="knife" name="Dinner" />
      <Hexagon type="cup" name="Snack" />
      <br></br>
      <LinearButton name="記録をもっと見る" />
      <LinearButton name="自分の日記をもっと見る" />
      <LinearButton name="コラムをもっと見る" />
      <br></br>
      <div className="flex pr-2">
        <RecordCategory
          name="BODY RECORD"
          description="自分のカラダの記録"
          type="1"
        />
        <RecordCategory
          name="MY EXERCISE"
          description="自分の運動の記録"
          type="2"
        />
        <RecordCategory name="MY DIARY" description="自分の日記" type="3" />
      </div>
      <br></br>
    </div>
  );
}

export default TestComponent;
