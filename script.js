let tasks=[];
const addTask=()=>{
    const taskInput=document.getElementById('taskInput');
    const text=taskInput.ariaValueMax.trim();
    if(text){
        tasks.push({text:text,completed:false});
        updateTaskList();
    }
};
const updateTaskList=()=>{
    const taskList=document.getElementById('task-list');
    taskList.innerHTML=''
    taskList.forEach((task,index) =>{
        const listItem=document.createElement('li');
        listItem.innerHTML=`
        <div class="taskItem">
        <div class="task ${task.completed ? "completed":""}">
        <input type="checkbox" class="checkbox" ${task.completed?"checked":""}/>
        <p>Finish this project</p>
        </div>
        <div class="icons">
        <img src="">
        <img src="">
        </div>
        </div>
        `;
        listItem.addEventListener('change',()=>toggleTaskComplete())
        taskList.append(listItem);
    })
}

document.getElementById('newTask').addEventListener('click',function(e){
    e.preventDefault()

    addTask();
});
