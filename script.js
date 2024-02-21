//this api is not allowing me to access the resource so i cant able to fetch the data from api thats i had to hard code the website instead of making it dynamic
//if can able to fetch the api then ill do conditional rendering of card based on the asset_title which was present in every object

/* let tasks;

async function getTasks() {
    try {
        const response = await fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json');       
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        tasks = await response.json();
    } catch (error) {
        console.error(error);
    }
}

getTasks(); */

//im giving that json to local variable

let cardsContainer = document.getElementById("cardsContainer");
let mainTitle = document.getElementById('mainTitle')
let taskTitle = document.getElementById('taskTitle')
let taskDescription = document.getElementById('taskDescription')
let closeBtn  =document.getElementById('closeBtn');
let noticeBoard = document.getElementById('noticeBoard')

closeBtn.addEventListener('click',()=>{
  noticeBoard.style.display = 'none'
})

let json = {
  _id: {
    $oid: "63b64dc9e3b230ebb60a495d",
  },
  _key: "topic:2085",
  category: "Course",
  cid: {
    $numberDouble: "NaN",
  },
  commitment: "4 hours",
  commitment_type: "custom",
  deadline: "",
  description:
    "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
  faqs: [],
  globalTags: [],
  isActive: true,
  lastposttime: 0,
  learning_outcomes: [
    "Bare minimum knowledge of project management",
    "4SA Concept",
    "Would be able to handle any project efficiently",
  ],
  mainPid: 0,
  postcount: 0,
  pre_requisites: [
    "An open mind to learn any concept",
    "Thought of Unlearning and Relearning ",
  ],
  project_image:
    "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
  short_description:
    "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
  slug: "2085/technical-project-management",
  status: "published",
  tasks: [
    {
      task_id: 18882,
      task_title: "Explore the world of management",
      task_description:
        "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
      status: "notworkyet",
      assets: [
        {
          asset_id: 18883,
          asset_title: "Technical Project Management",
          asset_description:
            "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
          asset_content: " https://www.youtube.com/embed/TiMRwri1xJ8",
          asset_type: "display_asset",
          asset_content_type: "video",
        },
        {
          asset_id: 18884,
          asset_title: "Threadbuild",
          asset_description:
            "Watch the video and thread build, and jot out key threads while watching that video.",
          asset_content: " ",
          asset_type: "input_asset",
          asset_content_type: "threadbuilder",
        },
        {
          asset_id: 18885,
          asset_title: "Structure you pointers ",
          asset_description:
            "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
          asset_content: " ",
          asset_type: "input_asset",
          asset_content_type: "article",
        },
        {
          asset_id: 18886,
          asset_title: "4SA Method",
          asset_description: "To explore more read more",
          asset_content:
            " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
          asset_type: "display_asset",
          asset_content_type: "article",
        },
      ],
    },
  ],
  tid: 2085,
  timestamp: 1672891849700,
  title: "Technical Project Management",
  type: "project",
  uid: 100,
  viewcount: 0,
  publishedAt: 1672893847792,
};

mainTitle.innerHTML = json.title;
taskTitle.innerHTML = json.tasks[0].task_title;
taskDescription.innerHTML = json.tasks[0].task_description;

let tasks = json.tasks[0].assets;

function addCards() {
  tasks.forEach((task, i) => {
    if (task.asset_title == "Technical Project Management") {
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
      <section class="card" id="tech">
      <div class="cardTitle">${task.asset_title}</div>
      <div class="cardInfoContainer">
        <div class="cardDesc">
          <span class="bold">Description : </span
          ><span
            >${task.asset_description}</span
          >
        </div>
        <div class="cardInfo">
          <a
            href="https://www.youtube.com/embed/TiMRwri1xJ8"
            target="_blank"
            ><img src="./images/image 13.png" alt="yt" style="width: 26rem"
          /></a>
        </div>
      </div>
    </section>`;

      cardsContainer.appendChild(div);
    }
    if (task.asset_title == "Threadbuild") {
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <section class="card" id="thread">
          <div class="cardTitle">${task.asset_title}</div>
          <div class="cardInfoContainer">
            <div class="cardDesc">
              <span class="bold">Description : </span
              ><span
                >${task.asset_description}</span
              >
            </div>
            <div class="cardInfo threadInfo">
              <h3>Thread A</h3>
              <div class="subthreadInputContainer">
                <div class="subThread">
                  <label for="thread1" class="subThreadLabel"
                    >Sub thread 1</label
                  >
                  <input
                    type="text"
                    placeholder="Enter Text Here"
                    class="subThreadInput"
                  />
                </div>
                <div class="subThread">
                  <label for="thread2" class="subThreadLabel"
                    >Sub thread 1</label
                  >
                  <input
                    type="text"
                    placeholder="Enter Text Here"
                    class="subThreadInput"
                  />
                </div>
              </div>
              <div class="subThreadButton">
                <button class="submitBtn">+ Sub-thread</button>
              </div>
              <div class="summaryOfA subThread">
                <label for="summary" class="subThreadLabel"
                  >Summary for Thread A</label
                >
                <textarea
                  class="subThreadInput summaryinput"
                  placeholder="Enter Text Here"
                ></textarea>
              </div>
            </div>
          </div>
        </section>`;

      cardsContainer.appendChild(div);
    }
    if (task.asset_title == "Structure you pointers ") {
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
      <section class="card" id="pointer">
      <div class="cardTitle">${task.asset_title}</div>
      <div class="cardInfoContainer">
        <div class="cardDesc">
          <span class="bold">Description : </span
          ><span
            >${task.asset_description}
          </span>
        </div>
        <div class="pointerCardInfo">
          <div class="pointerTitle">
            <h4>Title</h4>
            <input type="text" class="pointerTitleInput" />
          </div>
          <div class="pointerContent">
            <div class="content">
              <div>File</div>
              <div>Edit</div>
              <div>View</div>
              <div>Insert</div>
              <div>Format</div>
              <div>Tools</div>
              <div>Table</div>
              <div>Help</div>
            </div>
            <div>
              <textarea
                class="subThreadInput summaryinput pointerTetarea"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </section>`;

      cardsContainer.appendChild(div);
    }
    if (task.asset_title == "4SA Method") {
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <section class="card" id="sa">
          <div class="cardTitle">${task.asset_title}</div>
          <div class="cardInfoContainer">
            <div class="cardDesc">
              <span class="bold">Description : </span
              ><span>${task.asset_description}</span>
            </div>
            <div class="saInfo">
              <div class="sa">
                <h4>Introduction</h4>
                <p>The 4SA Method , How to bring a idea into progress ?</p>
              </div>
              <div class="sa">
                <h4>Thread A</h4>
                <p>
                  How are you going to develop your stratergy ? Which method are
                  you going to use to develop a stratergy ? What if the project
                  is lengthy?
                </p>
              </div>
            </div>
          </div>
        </section>`;

      cardsContainer.appendChild(div);
    }
  });
}

addCards();

