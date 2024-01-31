/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// Import Data
import Data from '../../utils/data.json';
// Import Hooks
import {createContext, useState, useEffect} from 'react';

export const appDataContext = createContext({
  slideContentData: {},
  slidePage: 0,
  slideContent: {},
  handleSlidePage: () => {},
})

export const AppDataProvider = (({children}) => {
  const [ slideContentData, setSlideContentData ] = useState({});
  const [slidePage, setSlidePage] = useState(0);
  const [slideContent, setSlideContent] = useState(0);


  const handleSlidePage = (direction) => {
    if(direction === 'left' && slidePage > 0){
      setSlidePage(slidePage - 1)
    } else if(direction === 'right' && slidePage < slideContentData.length -1) {
      setSlidePage(slidePage + 1)
    } else if (direction === 'right' && slidePage === slideContentData.length -1){
      setSlidePage(0)
    }
  }


  useEffect(() => {
    const data = Data;
    const slideContentDataArray = Object.values(data)
    setSlideContentData(slideContentDataArray);
  }, [])

  useEffect(() => {
    const content = slideContentData[slidePage]
    setSlideContent(content);
  }, [slideContentData, slidePage])

  const value = {
    slideContentData,
    slidePage,
    slideContent,
    handleSlidePage,
  }

  return (
    <appDataContext.Provider value={value}>
      {children}
    </appDataContext.Provider>
  )
})
