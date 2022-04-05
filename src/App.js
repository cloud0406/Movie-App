import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // 라우터 사용위해 import -> 버전 바뀐거 확인해서 그에 맞게 사용
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      {" "}
      {/* 아래 버전은 예전 버전 -> 라우터 사용법 버전 확인하고 알맞는 사용법 사용하기  */}
      <Switch>
        <Route path="/abot-us">
          {" "}
          {/* 해당 경로에 오면 */}
          <h1>Hello</h1> {/* 다음 코드 실행 */}
        </Route>
        <Route path="/movie/:id">
          {" "}
          {/* ':' 을 사용하여 id변수를 통해 url을 입력하여 이동 가능  => useParams() */}
          <Detail />{" "}
          {/* 위의 경로에서 ':'뒤의 id변수의 값을 'Detail' 컴포넌트에서 파라미터로 전달받음 */}
        </Route>
        <Route path="/">
          {" "}
          {/* 자주 사용되는 홈 경로 */}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
