import classes from "./CssModules.module.scss"

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Css Modulesです</p>
      <button className={classes.button}>ボタン</button>
    </div>
  )
}
