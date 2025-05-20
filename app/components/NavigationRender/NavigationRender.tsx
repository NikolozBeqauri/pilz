import BurgerNav from "../BurgerNav/BurgerNav"
import Navigation from "../Navigation/Navigation"
import styles from "./NavigationRender.module.scss"
const NavigationRender = () => {
  return (
    <div>
      <div className={styles.navigation}>
        <Navigation/>
      </div>
      <div className={styles.burgerNav}>
        <BurgerNav/>
      </div>
    </div>
  )
}

export default NavigationRender