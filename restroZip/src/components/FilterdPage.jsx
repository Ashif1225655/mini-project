import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DishesCard from "../layouts/DishesCard";
import { useDispatch, useSelector } from "react-redux";
import { addToBag } from "../store/CartSlice";

const FilterdPage = () => {
  const { category } = useParams();
  const [showData, setShowData] = useState([]);
  const allData = useSelector((state) => state.bag.Mydata);
  const dispatch = useDispatch();

  useEffect(() => { 
    setShowData(allData.filter((value) => value.type === category));
  },[category, allData]);
 
  const handleclick = (data) => {
    dispatch(addToBag(data));
  };
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {showData?.map((data, id) => {
        return (
          <div className="lg:w-1/4">
          <DishesCard
            key={id}
            handleclick={() => handleclick(data)}
            btnname="ADD Cart"
            img={data.image}
            title={data.title}
            price={data.price}
          />
          </div>
        );
      })}
    </div>
  );
};

export default FilterdPage;
