import Activity from "../components/Activity"
import "./styles/Activities.css"
import arraysImg from '../assets/activity_imgs/arrays.png'
import stringsImg from "../assets/activity_imgs/strings.png"
import llImg from "../assets/activity_imgs/linked_lists.png"
import searchImg from "../assets/activity_imgs/searching_algo.gif"
import sortImg from "../assets/activity_imgs/sort_algo.png"
import sandqImg from "../assets/activity_imgs/sandq.png"

const Activities = () => {
    return (
        <main className="activities-main">
            <section className="activities-title">
                <h1>ACTIVITIES CENTER</h1>
            </section>
            <section className="activities-container">
                <Activity 
                    actName="Arrays"
                    imgPath={arraysImg}
                    navigateTo="/activites/arrays"
                />
                <Activity 
                    actName="Strings"
                    imgPath={stringsImg}
                    navigateTo="/activites/strings"
                />
                <Activity 
                    actName="Linked Lists"
                    imgPath={llImg}
                    navigateTo="/activites/linked-lists"
                />
                <Activity 
                    actName="Searching Algos"
                    imgPath={searchImg}
                    navigateTo="/activites/searching-algos"
                />
                <Activity 
                    actName="Sorting Algos"
                    imgPath={sortImg}
                    navigateTo="/activites/sorting-algos"
                />
                <Activity 
                    actName="Stack & Queue"
                    imgPath={sandqImg}
                    navigateTo="/activites/stack-and-queue"
                />
            </section>
        </main>
    )
}

export default Activities