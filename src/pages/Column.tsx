import { useState } from "react";
import LinearButton from "../components/LinearButton";
import ColumnThumbnail from "../components/ColumnThumbnail";
import RecommendColumn from "../components/RecommendColumn";
import Layout from "../layout";
import columnData from '../../mock/thumbnail.json';

function Column() {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <Layout>
      <div className="Column">
        <div
          className="flex justify-around w-4/6 py-12 flex-wrap"
          style={{ margin: "0 auto" }}
        >
          {columnData.recomends.map((recomend, index) => <RecommendColumn key={index} name={recomend.name} description={recomend.description} />)}
        </div>
        <div
          className="flex justify-around w-4/6 pb-20 flex-wrap"
          style={{ margin: "0 auto" }}
        >
          {columnData.thumbnail.map((item) => {
            return <ColumnThumbnail
            key={item.type}
            name={item.name}
            time={item.time}
            type={item.type}
          />
          })}
        </div>
        <div
          className="flex justify-around w-4/6 pb-20 flex-wrap"
          style={{ margin: "0 auto" }}
        >
          {
            columnData.extraThumbnail.slice(0, expand ? columnData.extraThumbnail.length : 4).map((item) => {
              return <ColumnThumbnail
              key={item.type}
              name={item.name}
              time={item.time}
              type={item.type}
            />
            })
          }
        </div>
        {!expand && <div onClick={() => setExpand(true)} className="flex justify-center py-4">
          <LinearButton name="コラムをもっと見る" />
        </div>}
      </div>
    </Layout>
  );
}

export default Column;
