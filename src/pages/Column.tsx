import LinearButton from "../components/LinearButton";
import ColumnThumbnail from "../components/ColumnThumbnail";
import RecommendColumn from "../components/RecommendColumn";

function Column() {
  return (
    <div className="Column">
      <div
        className="flex justify-around w-4/6 py-12"
        style={{ margin: "0 auto" }}
      >
        <RecommendColumn name="RECOMMENDED COLUMN" description="オススメ" />
        <RecommendColumn name="RECOMMENDED COLUMN" description="オススメ" />
        <RecommendColumn name="RECOMMENDED COLUMN" description="オススメ" />
        <RecommendColumn name="RECOMMENDED COLUMN" description="オススメ" />
      </div>
      <div
        className="flex justify-around w-4/6 pb-20"
        style={{ margin: "0 auto" }}
      >
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
      <div
        className="flex justify-around w-4/6 pb-20"
        style={{ margin: "0 auto" }}
      >
        <ColumnThumbnail
          name="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
          time="2021.05.17  23:25"
          type="5"
        />
        <ColumnThumbnail
          name="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
          time="2021.05.17  23:25"
          type="6"
        />
        <ColumnThumbnail
          name="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
          time="2021.05.17  23:25"
          type="7"
        />
        <ColumnThumbnail
          name="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
          time="2021.05.17  23:25"
          type="8"
        />
      </div>
      <div className="flex justify-center py-4">
        <LinearButton name="コラムをもっと見る" />
      </div>
    </div>
  );
}

export default Column;
