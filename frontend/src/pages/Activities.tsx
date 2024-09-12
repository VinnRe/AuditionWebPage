import Activity from "../components/Activity"
import "./styles/Activities.css"
import arraysImg from '../assets/activity_imgs/arrays.png'
import stringsImg from "../assets/activity_imgs/strings.png"
import llImg from "../assets/activity_imgs/linked_lists.png"
import searchImg from "../assets/activity_imgs/searching_algo.gif"
import sortImg from "../assets/activity_imgs/sort_algo.png"
import sandqImg from "../assets/activity_imgs/sandq.png"
import treeImg from "../assets/activity_imgs/trees.png"
import graphImg from "../assets/activity_imgs/graph.png"
import greedImg from "../assets/activity_imgs/greed.png"
import recurImg from "../assets/activity_imgs/recursion.png"
import backImg from "../assets/activity_imgs/back.png"
import dynamicImg from "../assets/activity_imgs/dynamic.png"

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
                <Activity 
                    actName="Trees"
                    imgPath={treeImg}
                    navigateTo="/activites/trees"
                />
                <Activity 
                    actName="Graph"
                    imgPath={graphImg}
                    navigateTo="/activites/strings"
                />
                <Activity 
                    actName="Greedy Method"
                    imgPath={greedImg}
                    navigateTo="/activites/greedy-method"
                />
                <Activity 
                    actName="Recursion"
                    imgPath={recurImg}
                    navigateTo="/activites/recursion"
                />
                <Activity 
                    actName="Backtracking Algo"
                    imgPath={backImg}
                    navigateTo="/activites/backtracking-algo"
                />
                <Activity 
                    actName="Dynamic Programming"
                    imgPath={dynamicImg}
                    navigateTo="/activites/dynamic-programming"
                />
            </section>
        </main>
    )
}

export default Activities