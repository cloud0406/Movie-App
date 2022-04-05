import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json(); // request 보내고 response 받은 데이터를 json화 시켜서 저장
    setMovies(json.data.movies); // 위의 과정을 거친 데이터를 영화정보들을 가져옴
    setLoading(false);
  };
  useEffect(() => {
    // useEffect를 통해 위의 'getMoive' 함수를 처음 렌더링시에 한번만 실행 -> 이후 state가 바뀌어서 렌더링 시에도 이 함수는 재실행 x
    getMovies();
  }, []); // fetch를 통해 api의 정보를 불러오는 코드를 렌더링할때마다 실행하게되면 속도가 느려지므로 한번만 실행하기 위해 작성
  return (
    <div className={styles.container}>
      {loading ? ( // 'loading' state가 true이면
        <div className={styles.loader}>
          <span>Loading...</span>
        </div> // 해당 코드 실행(loading 텍스트를 화면에 띄워줌)
      ) : (
        // 'loading' state가 false이면
        <div className={styles.movies}>
          {movies.map(
            (
              movie // fetch로 api에서 얻은 영화정보들에서 개별적인 영화정보에 접근하여 'Movie' 컴포넌트에 파라미터를 넘겨주고 실행
            ) => (
              <Movie
                key={movie.id} // 리액트에서 map등 배열을 이용할때는 반드시 key값을 지정해줘야함
                id={movie.id}
                year={movie.year}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
export default Home;
