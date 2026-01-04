import { useEffect, useReducer } from "react";

const initialState = {
  status: "iddle",
  user: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH-START":
      return {
        ...state,
        status: "wird geladen...",
        error: null,
      };

    case "FETCH-SUCCESS":
      return {
        ...state,
        status: "success",
        user: action.payload,
        error: null,
      };
    case "FETCH-ERROR":
      return {
        ...state,
        status: "error",
        error: action.payload,
      };
    default:
      return state;
  }
}

function UserDataFetching() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH-START" });

      try {
        const response = await fetch("https://randomuser.me/api/?results=1");
        const data = await response.json();

        dispatch({ type: "FETCH-SUCCESS", payload: data.results[0] });
      } catch (err) {
        dispatch({ type: "FETCH-ERROR", payload: err });
      }
    };

    fetchData();
  }, []);

  if (state.status === "loading" || state.status === "iddle") {
    return <h4>Ausstehend...</h4>;
  }

  if(state.status === 'error') {
    return <h4>Oops, hata: {state.error?.message}</h4>
  }
  return (
    <section className="gray-box">
      <h3>Kundendaten</h3>
      <h4>Name: {state.user.name.first}</h4>
      <img src={state.user.picture.large}></img>
    </section>
  );
}

export default UserDataFetching;
