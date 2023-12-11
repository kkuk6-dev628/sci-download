import React, { useState } from "react";
import { featureCards, tabComponents, tabsData } from "../../../utils/utils";
import Image from "../../atoms/Image/Image";
import Tabs from "../../atoms/Tabs/Tabs";
import CardGroup from "../../molecules/CardGroup/CardGroup";
import {
    DescriptionContainer,
    ImageContainer,
    RowContainer,
    ShowInformationContainer,
} from "./ShowInformation.styles";

// NOTE: To show the further details about the car
export default function ShowInformation({ selectedCar }) {
    
  /**
   * Component States
   */
  const [tabs, setTab] = useState(tabsData);
  const [tabIndex, setTabIndex] = useState(0);
  /**
   * End of Component States
   */
  
  /**
   * NOTE: Handle tab active states
   * @param {number} index 
   */
  const onHandledTabState = (index) => {
    let cloneTabs = [...tabs];
    cloneTabs = cloneTabs.map((item) => ({
      ...item,
      isActive: false,
    }));
    cloneTabs[index].isActive = !cloneTabs[index].isActive;
    setTabIndex(index);
    setTab(cloneTabs);
  };

  return (
    <ShowInformationContainer>
      <RowContainer>
        <ImageContainer>
          <Image alt={"#carImage"} src={selectedCar?.imageURL} />
        </ImageContainer>
        <DescriptionContainer>
          <h1>
            <span className="badge bg-dark">{selectedCar?.name}</span>
          </h1>
          <div className="d-flex flex-wrap">
            <CardGroup featureCards={featureCards} selectedCar={selectedCar} />
          </div>
        </DescriptionContainer>
      </RowContainer>
      <Tabs onHandledTabState={onHandledTabState} tabs={tabs}>
        {tabComponents(tabIndex, selectedCar)}
      </Tabs>
    </ShowInformationContainer>
  );
}
