// Button
// https://material-ui.com/components/buttons/
// https://material-ui.com/api/button/

// Typography
// https://material-ui.com/api/typography/

// Grid
// https://material-ui.com/components/grid/#grid
// https://material-ui.com/customization/breakpoints/

import React from "react";
import { Button, makeStyles, Typography, Grid, Paper } from "@material-ui/core";

// ボタンのCSSを定義(makeStyles)
const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "3px 50px",
    margin: "5px",
  },
  typoStyle: {
    color: "blue",
  },
  paperStyle: {
    backgroung: "orange",
    height: "50px",
  },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      {/* Typography */}
      <Typography
        className={classes.typoStyle} // スタイルの優先度高
        color="secondary"
        variant="h3"
        align="left"
        gutterBottom
        noWrap
      >
        noWrap noWrap noWrap noWrap noWrap
      </Typography>

      <Typography variant="h1" noWrap>
        noWrap noWrap noWrap noWrap noWrap
      </Typography>

      <Typography gutterBottom>gutterBottom</Typography>

      <Typography align="left">align="left"</Typography>
      <Typography align="center">align="center"</Typography>
      <Typography align="right">align="right"</Typography>

      <Typography variant="h3">variant="h3"</Typography>
      <Typography variant="subtitle1">variant="subtitle1"</Typography>
      <Typography variant="body1">variant="body1"</Typography>
      <Typography variant="caption">variant="caption"</Typography>
      <Typography variant="overline">variant="overline"</Typography>

      <Typography color="inherit">inherit</Typography>
      <Typography color="primary">primary</Typography>
      <Typography color="secondary">secondary</Typography>
      <Typography color="textPrimary">textPrimary</Typography>
      <Typography color="error">error</Typography>

      {/* Grid */}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="flex-end"
      >
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            DEMO
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={2}>
            TEST
          </Grid>
        </Grid>
        <Grid item xs={12} justify="space-around" container>
          <Grid item xs={3}>
            Resources JSONPlaceholder comes with a set of 6 common resources:
            /posts 100 posts /comments 500 comments /albums 100 albums /photos
            5000 photos /todos 200 todos /users 10 users Note: resources have
            relations. For example: posts have many comments, albums have many
            photos, ... see below for routes examples.
          </Grid>
          <Grid item xs={3}>
            Resources JSONPlaceholder comes with a set of 6 common resources:
            /posts 100 posts /comments 500 comments /albums 100 albums /photos
            5000 photos /todos 200 todos /users 10 users Note: resources have
            relations. For example: posts have many comments, albums have many
            photos, ... see below for routes examples.
          </Grid>
          <Grid item xs={3}>
            Resources JSONPlaceholder comes with a set of 6 common resources:
            /posts 100 posts /comments 500 comments /albums 100 albums /photos
            5000 photos /todos 200 todos /users 10 users Note: resources have
            relations. For example: posts have many comments, albums have many
            photos, ... see below for routes examples.
          </Grid>
        </Grid>
      </Grid>

      {/* Button */}
      <Button variant="contained" color="default">
        default
      </Button>
      <Button variant="contained" color="inherit">
        inherit
      </Button>
      <Button variant="contained" color="primary">
        primary
      </Button>
      <Button variant="contained" color="secondary">
        secondary
      </Button>
      <Button variant="contained" disabled>
        disabled
      </Button>
      <Button variant="contained" color="primary" href="#">
        link
      </Button>
      {/* useStylesのCSS適用 */}
      <Button className={classes.btnStyle} variant="contained" color="primary">
        primary
      </Button>
    </div>
  );
};

export default MaterialUI;
