"use client";

import FilterIcon from "@searchlight/shared/assets/icons/filter.svg";
import FilterEnabledIcon from "@searchlight/shared/assets/icons/filter-enabled.svg";

import Typo from "@searchlight/shared/components/ui/typography";

import s from "./filter.module.scss";
import { useState } from "react";
import { ColorPalette } from "@searchlight/shared/lib/colors";
import Button from "@searchlight/shared/components/ui/button";
import Chip from "../chip";

import { filterList } from "@/src/constants/filterList";

interface FilterProps {
  setFilter: (value: string[]) => void;
  filter: string[];
}

const Filter = ({ setFilter, filter }: FilterProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div className={s.layout}>
      <div className={s.toggle} onClick={() => setModalVisible(!modalVisible)}>
        {filter.length > 0 ? <FilterEnabledIcon />: <FilterIcon /> }
      </div>
      {modalVisible && (
        <div className={s["modal-container"]}>
          <Typo.LargeTitle color={ColorPalette.Grayscale10}>
            응급실 분류
          </Typo.LargeTitle>
          <div className={s["modal-chip-container"]}>
            {filterList.map((item) => (
              <Chip
                key={item}
                onClick={() => {
                  if (filter.includes(item)) {
                    setFilter(filter.filter((f) => f !== item));
                  } else {
                    setFilter([...filter, item]);
                  }
                }}
                selected={filter.includes(item)}
                label={item}
              />
            ))}
          </div>
          <div className={s["modal-button-container"]}>
            <Button onClick={() => {
              setFilter([]);
              setModalVisible(false);
            }} variants="secondary" size="small">
              초기화
            </Button>
            <Button onClick={() => {
              setModalVisible(false);
            }} variants="primary" size="small">
              적용
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
