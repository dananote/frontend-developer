import React, { useState, useEffect } from 'react'
import ImgList from './components/ImgList';
import useScrollBottom from './hooks/useScrollBottom';
import Loading from './components/Loading';

function App() {


  const [imgData, setImgData] = useState([]);
  const [fetchPage, setFetchPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  console.log("로딩중인가", isLoading)

  const isBottom = useScrollBottom();

  useEffect(() => {
    if(isBottom){
      setFetchPage((prevPage) => {
        return prevPage + 1;
      })
    }
  }, [isBottom])
  
  //데이터 가져오기
  useEffect(() => {
    const fetchData = async() => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${fetchPage}3&limit=5`);

        if(!response.ok) {
          throw new Error("네트워크 응답에 문제가 있습니다.");
        }

        const json = await response.json();
        setImgData((prevImages) => {
          return [...prevImages,...json]
        });
        setIsLoading(false);
      } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다:' , error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [fetchPage])


  // console.log(imgData)

  return (
    <div>
      <ImgList ImgData={imgData}/>
      <Loading />
    </div>
  );
}
export default App;
