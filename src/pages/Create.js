import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";
const useStyle = makeStyles({
  TextFeild: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  display: {
    display: "block",
  },
});
export default function Create() {
  const classes = useStyle();
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [titleer, settitleer] = useState(false);
  const [detailser, setdetailser] = useState(false);
  const [category, setcategory] = useState("Money");
  const usehistory = useHistory();
  const submitkero = (e) => {
    e.preventDefault();
    setdetailser(false);
    settitleer(false);
    if (title === "") {
      settitleer(true);
    }
    if (details === "") {
      setdetailser(true);
    }
    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          details,
          category,
        }),
      }).then(() => usehistory.push("/"));
    }
  };
  return (
    <Container>
      <Typography
        variant="h6"
        component="h6"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={submitkero}>
        <TextField
          error={titleer}
          onChange={(e) => settitle(e.target.value)}
          variant="outlined"
          label="New Title"
          fullWidth
          required
          className={classes.TextFeild}
        ></TextField>

        <TextField
          onChange={(e) => setdetails(e.target.value)}
          label="Details"
          error={detailser}
          multiline
          rows={5}
          fullWidth
          variant="outlined"
          className={classes.TextFeild}
        />

        <FormControl component="fieldset" className={classes.TextFeild}>
          <FormLabel component="legend">Note Category</FormLabel>
          <RadioGroup
            value={category}
            aria-label="gender"
            name="gender1"
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            {console.log(category)}
            <FormControlLabel
              value="Money"
              control={<Radio color="primary" />}
              label="Money"
            />
            <FormControlLabel
              value="Life & Rules"
              control={<Radio color="primary" />}
              label="Life & Rules"
            />
            <FormControlLabel
              value="Other"
              control={<Radio color="primary" />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>

        <Button
          size="large"
          variant="contained"
          color="Primary"
          elevation={7}
          type="submit"
          endIcon={<ChevronRightIcon />}
        >
          SUBMIT
        </Button>
      </form>
    </Container>
  );
}
