import { List, Item, Country, Flag } from "./CitiesList.styled";
import { useState, useEffect } from "react";

const CitiesList = ({ locationData, onChooseCity, handleClick }) => {
  console.log(locationData);

  return (
    <List>
      {locationData.results.map((item) => {
        // const handleClick = () => {
        //   onChooseCity(item.latitude, item.longitude);
        //   setCityName("");
        // };

        return (
          <Item
            key={item.id}
            onClick={handleClick(item.latitude, item.longitude)}
          >
            <Flag
              src={`https://hatscripts.github.io/circle-flags/flags/${item.country_code.toLowerCase()}.svg`}
              alt={item.coutry_code}
            />
            {item.name} <Country>({item.country})</Country>
          </Item>
        );
      })}
    </List>
  );
};

export default CitiesList;
