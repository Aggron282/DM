import React, { useState } from 'react';
import './../../css/home/tabs.css';
import TabGroup from "./tab_group.js"
import Job9 from "./../../imgs/job9.jpg"
import Job6 from "./../../imgs/job8.jpg"
import Job7 from "./../../imgs/job7.jpg"

function Component1() {
  var data = {
    steps:[
      {
        title: "Junk Assessment",
        description: "We assess your clutter and create a removal plan tailored to your space and budget."
      },
      {
        title: "Regular Pickups",
        description: "Weekly or bi-weekly junk pickup ensures your space stays clear year-round."
      },
      {
        title: "Satisfaction Guaranteed",
        description: "We promise results. If you're not happy, we'll come back free of charge."
      }
    ],
    image:Job9,
    buttonText:"Get Started"
  }
  return <TabGroup  data = {data} />
}

function Component2() {
  var data = {
    steps:[
      {
        title: "Junk Assessment",
        description: "We assess your clutter and create a removal plan tailored to your space and budget."
      },
      {
        title: "Regular Pickups",
        description: "Weekly or bi-weekly junk pickup ensures your space stays clear year-round."
      },
      {
        title: "Satisfaction Guaranteed",
        description: "We promise results. If you're not happy, we'll come back free of charge."
      }
    ],
    image:Job6,
    buttonText:"Free Quote"
  }
  return <TabGroup  data = {data} />}

function Component3() {
  var data = {
    steps:[
      {
        title: "Junk Assessment",
        description: "We assess your clutter and create a removal plan tailored to your space and budget."
      },
      {
        title: "Regular Pickups",
        description: "Weekly or bi-weekly junk pickup ensures your space stays clear year-round."
      },
      {
        title: "Satisfaction Guaranteed",
        description: "We promise results. If you're not happy, we'll come back free of charge."
      }
    ],
    image:Job7,
    buttonText:"Contact Us"
  }
  return <TabGroup  data = {data} />}

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Lawn Care', 'TruShrub Tree & Shrub', 'Pest Control'];

  return (
    <div className="tabs-container">
      <h2 className="tabs-title">Nobody Makes it Easier</h2>
      <div className="tabs-nav">
        {tabs.map((label, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="tabs-content">
        {activeTab === 0 && <Component1 />}
        {activeTab === 1 && <Component2 />}
        {activeTab === 2 && <Component3 />}
      </div>
    </div>
  );
}

export default Tabs;
