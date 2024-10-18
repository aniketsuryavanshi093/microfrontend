import React from "react";
import { useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useRef } from "react";

const MarketingAp = () => {
  const marketingappref = useRef(null);
  useEffect(() => {
    mount(marketingappref.current);
  });
  return <div ref={marketingappref}></div>;
};

export default MarketingAp;
