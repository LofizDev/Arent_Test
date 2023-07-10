import LinearButton from "../components/LinearButton";
import ColumnThumbnail from "../components/ColumnThumbnail";
import RecommendColumn from "../components/RecommendColumn";
import Layout from "../layout";
import columnData from '../../mock/thumbnail.json';

function Column() {
  return (
    <Layout>
      <div className="Column lg:w-[960px] w-full lg:px-0 px-4 mt-5 mx-auto">
        <div
          className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 "
        >
          {columnData.recomends.map((recomend, index) => <RecommendColumn key={index} name={recomend.name} description={recomend.description} />)}
        </div>
        <div
          className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 mt-6"
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
        <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 ">
          {
            columnData.extraThumbnail.map((item) => {
              return <ColumnThumbnail
                key={item.type}
                name={item.name}
                time={item.time}
                type={item.type}
              />
            })
          }
        </div>
        <div className="flex justify-center mt-5">
          <LinearButton name="コラムをもっと見る" />
        </div>
      </div>
    </Layout>
  );
}

export default Column;
