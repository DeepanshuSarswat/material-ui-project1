import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import Masonry from "react-masonry-css";
export default function Notes() {
  const [notess, setnotess] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setnotess(data));
  }, []);

  const DeleteBlog = (id) => {
    fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
    let newnotess = notess.filter((note) => id != note.id);
    setnotess(newnotess);
  };
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notess.map((note) => (
          <div>
            <Cards note={note} DeleteBlog={DeleteBlog} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
