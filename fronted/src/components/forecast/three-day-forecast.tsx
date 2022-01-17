import { Card } from "antd";
import { format } from "date-fns";
import React from "react";
import { Forecast } from "../../models/forecast";
import { spacingSmall } from "../../styles/spacing";

interface Props {
  readonly forecast: Forecast[];
}

export const ThreeDayForecast: React.FC<Props> = ({ forecast }) => {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: spacingSmall,
      }}
    >
      {forecast.map((forecast) => (
        <Card
          key={forecast.date.toISOString()}
          title={format(forecast.date, "cccc")}
        >
          <p>{forecast.condition}</p>
          <p>{forecast.temperature}</p>
        </Card>
      ))}
    </div>
  );
};
