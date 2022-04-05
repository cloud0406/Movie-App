import PropTypes from "prop-types"; // 프롭타입 사용하기 위해 import
import { Link } from "react-router-dom"; // Link : 브라우저의 새로고침 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  // 'Home.js'에서 받은 파라미터들
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>{" "}
          {/* h2태그(영화 제목)에 링크를 걸어서 {}안의 url로 이동하도록 만듬 -> 'Detail' 컴포넌트로 이동 */}
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li> // map 메소드 사용시 key값 부여하는거 잊지말기! => key값은 고유한 값이면 아무거나 상관없음
          ))}
        </ul>
      </div>
    </div>
  );
}

// 'Movie' 컴포넌트의 프롭타입 설정 : prop-types는 추가적인 사항이지 반드시 적어야할 코드는 아님
Movie.propTypes = {
  // 컴포넌트의 파라미터로 받는 값들의 부수적인 사항들
  id: PropTypes.number.isRequired, // id값은 숫자형으로 필수적으로 필요
  coverImg: PropTypes.string.isRequired, // coverImg값은 문자형으로 필수적으로 필요
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // genres값은 배열로 내부 값들은 문자열로 필수적으로 필요
};

export default Movie;
