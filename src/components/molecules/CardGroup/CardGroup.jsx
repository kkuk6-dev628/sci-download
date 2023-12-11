import React from "react";
import Card from "../../atoms/Card/Card";

export default function CardGroup({ featureCards, selectedCar }) {
  return featureCards?.map((feature) => (
    <Card
      title={feature.title}
      icon={feature.icon}
      value={selectedCar[feature.field]}
    />
  ));
}
