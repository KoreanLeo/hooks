import {useState} from "react";

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setcurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
    return;
    }
    return { 
      currentItem: allTabs[currentIndex],
      changeItem : setcurrentIndex
    };
};
const content = [
    {
      tab : "Section 1",
      content : "I'm the content of the Section 1",
    },
    {
      tab : "Section 2",
      content : "I'm the content of the Section 2",
    }
  ]

export {useTabs,content};