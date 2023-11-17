import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    return (
        <div>
            <div>
                Tus tareas:
            </div>
            {/* Todo crear for/map para listar multiples tareas  */}
            <TaskComponent task={defaultTask} />
        </div>
     
    );
       
};
    

export default TaskListComponent;
