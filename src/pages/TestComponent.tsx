import Hexagon from "../components/Hexagon";
import LinearButton from "../components/LinearButton";
import RecordCategory from "../components/RecordCategory";
import ColumnThumbnail from "../components/ColumnThumbnail";
import RecommendColumn from "../components/RecommendColumn";
import MyDiary from "../components/MyDiary";

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
      <div className="flex">
        <ColumnThumbnail
          name="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
          time="2021.05.17  23:25"
          type="1"
        />
        <ColumnThumbnail
          name="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
          time="2021.05.17  23:25"
          type="2"
        />
        <ColumnThumbnail
          name="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
          time="2021.05.17  23:25"
          type="3"
        />
        <ColumnThumbnail
          name="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
          time="2021.05.17  23:25"
          type="4"
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <RecommendColumn name="RECOMMENDED COLUMN" description="オススメ" />
      <br></br>
      <br></br>
      <MyDiary
        date="2021.05.21"
        time="23:25"
        content="私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
      />
    </div>
  );
}

export default TestComponent;
