
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
