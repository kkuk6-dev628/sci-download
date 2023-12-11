import React, { useState } from "react";
import { FormContainer, LogoContainer } from "../../../App.styles";
import Image from "../../atoms/Image/Image";
import logo from "../../../assets/car_vista_logo.png";
import SelectInput from "../../molecules/SelectInput/SelectInput";
import { cars } from "../../../data/CarsData";
import Button from "../../atoms/Button/Button";
import { resource_EN } from "../../../utils/common/constants/resource_EN";

export default function SearchForm({
  isTypeSelected,
  selectCarType,
  setSelectCarType,
  toggleSlider,
  setSelectedCar
}) {

  const onHandleCarTypeChange = (event) => {
    console.log("target value : ", event.target.value);
    if (event.target.value !== "default") {
      setSelectCarType(event.target.value);
      const filteredOutSelectedCar = cars.filter(
        (car) => car.type === event.target.value
      )[0];
      setSelectedCar(filteredOutSelectedCar);
    }
  };
  return (
    <FormContainer>
      <LogoContainer>
        <Image alt="#logo" src={logo} />
      </LogoContainer>
      {isTypeSelected && <p className="text-danger">{resource_EN.car_is_car_type_selected_error}</p>}
      <div className="d-flex justify-content-center align-items-center">
        <SelectInput
          value={selectCarType}
          onChange={onHandleCarTypeChange}
          options={cars}
          objId={resource_EN.car_select_input_id}
          objTextKey={resource_EN.car_select_input_text_key}
          defaultOption={resource_EN.car_select_default_option}
        />
        <Button onClick={toggleSlider} label={resource_EN.car_btn_search_label} />
      </div>
    </FormContainer>
  );
}
