
const tasks = [
    {
        id:1,
        text:"Study Math",
        day: 'Feb 05th at 02:30',
        reminder:false,
    },
    {
        id:2,
        text:"Go gym",
        day: 'March 05th at 07:00',
        reminder:true,
    },
    {
        id:3,
        text:"Food Shopping",
        day: 'Jan 29th at 18:00',
        reminder:false,
    },
];


function Tasks (){
    return(

        tasks.map((task)=> {
            <h3>{task.text}</h3>
        })
    )
}

export default Tasks