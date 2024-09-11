import Activity from "../components/Activity"
import "./styles/Activities.css"

const Activities = () => {
    return (
        <main className="activities-main">
            <section className="activities-title">
                <h1>ACTIVITIES CENTER</h1>
            </section>
            <section className="activities-container">
                <Activity 
                    actName="Arrays"
                    navigateTo="/activites/arrays"
                />
                <Activity 
                    actName="Strings"
                    navigateTo="/activites/strings"
                />
                <Activity 
                    actName="Linked Lists"
                    navigateTo="/activites/linked-lists"
                />
                <Activity 
                    actName="Searching Algos"
                    navigateTo="/activites/searching-algos"
                />
                <Activity 
                    actName="Sorting Algos"
                    navigateTo="/activites/sorting-algos"
                />
                <Activity 
                    actName="Stack & Queue"
                    navigateTo="/activites/stack-and-queue"
                />
            </section>
        </main>
    )
}

export default Activities