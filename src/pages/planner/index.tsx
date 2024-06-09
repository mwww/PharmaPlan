import setTitle from "../../helper/title/title";
import Calendar from "./calendar/index";
import Planmaker from "./planmaker/index"
import css from "./.module.scss"
export default function Planner() {
    setTitle("Planner");

    return (
        <div className={css.cont}>
            <div className={css.calendar}>
                {/* <h1>Calendar</h1> */}
                <Calendar />
            </div>
            <div className={css.planner}>
                <Planmaker />
            </div>
        </div>
      );
}