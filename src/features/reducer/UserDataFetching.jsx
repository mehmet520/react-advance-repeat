import { useEffect, useReducer } from "react";

const initialState = {
  status: "iddle",
  user: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH-START":
      return { ...state, status: "loading", error: null };
    case "FETCH-SUCCESS":
      return { ...state, status: "success", user: action.payload, error: null };
    case "FETCH-ERROR":
      return { ...state, status: "error", error: action.payload };
    default:
      return state;
  }
}

function UserDataFetching() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH-START" });

    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=1");
        // if(response.ok) throw new Error('Sayfa bulundu');
        const data = await response.json();
        console.log("data :>> ", data.results[0]);
        dispatch({ type: "FETCH-SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH-ERROR", payload: err });
      }
    };
    fetchData();
  }, []);

  if (state.status === "iddle" || state.status === "loading") {
    return <h4>Pending...</h4>;
  }

  if (state.status === "error") {
    return <h4>Oops, hata: {state.error?.message}</h4>;
  }
  return (
    <section className="gray-box">
      <h3>User Data</h3>
      <h4>Name: {state.user?.results[0].name?.first}</h4>
      <img
        src={state.user?.results[0].picture.large}
        alt={state.user?.results[0].name.last}
      ></img>
      <pre>{JSON.stringify(state.user?.results[0], null, 2)}</pre>
      {/* <pre>{JSON.stringify(state.user.results[0], null, 2)}</pre> */}
    </section>
  );
}
export default UserDataFetching;
