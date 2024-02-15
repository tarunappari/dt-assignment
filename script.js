//this api is not allowing me to access the resource so i cant able to fetch the data from api thats i had to hard code the website instead of making it dynamic
//if can able to fetch the api then ill do conditional rendering of card based on the asset_title which was present in every object

let tasks;

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

getTasks();
