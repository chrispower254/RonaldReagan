import { Card } from "antd";
import { addDays, format } from "date-fns";
import React from "react";
import { Forecast } from "../../models/forecast";
import { spacingMedium, spacingSmall } from "../../styles/spacing";

interface Props {
  readonly forecast: Forecast[];
}

export const ThreeDayForecast: React.FC<Props> = ({ forecast }) => {
  const today = new Date();
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: spacingSmall,
        marginTop: spacingMedium,
      }}
    >
      {forecast.map((forecast, index) => {
        const forecastedDay = addDays(today, index + 1);
        return (
          <Card
            key={forecastedDay.toISOString()}
            title={format(forecastedDay, "cccc")}
          >
            <p>{forecast.condition}</p>
            <p>{`${forecast.temperature}°`}</p>
          </Card>
        );
      })}
    </div>
  );
};
