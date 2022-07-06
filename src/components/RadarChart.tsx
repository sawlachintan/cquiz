import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { FC } from "react";
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);
type Props = {
    data: any;
};
export const RadarChart: FC<Props> = ({ data }) => {
    return <Radar data={data} />;
};
