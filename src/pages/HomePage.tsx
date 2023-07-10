import { useState } from "react";
import FoodInfo from "../components/FoodInfo";
import Hexagon from "../components/Hexagon";
import { categories, meal } from "../../mock/foods";
import LinearButton from "../components/LinearButton";
import Chart from "../components/Chart";
import Layout from "../layout";
import d01 from "/assets/images/d01.jpg";
import threefour from "/assets/icons/threefour.svg";
function HomePage() {
    const [expand, setExpand] = useState<boolean>(false);
    const [active, setActive] = useState<string>("all");
    const [data] = useState({ data1: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6], data2: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8] })

    return (
        <Layout>
            <div>
                <div className="flex">
                    <div className="flex-[40%] relative">
                        <img src={d01} alt="d01" className="w-full object-cover h-[400px]" />
                        <img src={threefour} alt="threefour" className="absolute top-[25%] left-[35%]" />
                        <div className="flex absolute top-[43%] left-[44%] text-white items-end justify-center">
                            <div className="text-sm">05/21</div>
                            <div className="text-2xl">75%</div>
                        </div>
                    </div>
                    <div className="flex-[60%]">
                        <Chart data={data} />
                    </div>
                </div>
                <div className="flex mx-auto cursor-pointer items-center w-[700px] justify-between mt-10">
                    {categories.map((e) => (
                        <Hexagon
                            onClick={() => setActive(e.name)}
                            key={e.name}
                            type={e.type}
                            name={e.name}
                        />
                    ))}
                </div>
                <div className="lg:w-[960px] w-full mt-[50px] flex flex-col md:px-0 px-4 items-center mx-auto">
                    <div className="gap-[6px] grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3">
                        {meal
                            .filter((el) => (active !== "all" ? el.category == active : true))
                            .slice(0, expand ? meal.length : 8)
                            .map((e, i) => (
                                <FoodInfo key={i} title={e.title} url={e.url} />
                            ))}
                    </div>
                    {!expand && (
                        <div onClick={() => setExpand(true)} className="mt-5 mx-auto">
                            <LinearButton name="記録をもっと見る" />
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;
