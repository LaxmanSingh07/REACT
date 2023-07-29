import React from "react";
import { useState, useEffect } from "react";
const Key = "c474964f";

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(
    function () {
      callback?.();
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setIsError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${Key}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong, please try again later");

          const data = await res.json();

          console.log(data);

          if (data.Response === "False") throw new Error(data.Error);

          setMovies(data.Search);
          setIsError("");

          console.log(data.Search);
          console.log(movies); // stale state

          setIsLoading(false);
        } catch (error) {
          setIsError(error.message);
          if (error.name !== "AbortError") {
            setIsError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setIsError("");
        return;
      }

      // handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, isError };
}
