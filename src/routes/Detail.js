import { useEffect } from "react";
import { useParams } from "react-router-dom"; // useParams 위해 import
function Detail() {
  const { id } = useParams(); // App.js에서 라우터 경로로 설정한 id변수의 값을 파라미터로 전달받음
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ) // 해당 영화의 id경로로 api에 request 요청
      .json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
