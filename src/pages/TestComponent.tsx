import Hexagon from "../components/Hexagon";
import LinearButton from "../components/LinearButton";

function TestComponent() {
  return (
    <div>
      <Hexagon type="knife" name="Morning" />
      <Hexagon type="knife" name="Lunch" />
      <Hexagon type="knife" name="Dinner" />
      <Hexagon type="cup" name="Snack" />
      <LinearButton name='記録をもっと見る' />
      <LinearButton name='自分の日記をもっと見る' />
      <LinearButton name='コラムをもっと見る' />
    </div>
  );
}

export default TestComponent;
