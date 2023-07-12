const tareas = [{tarea:'Desayurar', hora: 0800}, {tarea:"Sacar la basura", hora: 1000},{tarea: 'Limpiar las ventans', hora: 1200}, {tarea:'Estudiar', hora: 1600}]
const task = document.getElementById('tareas')

tareas.forEach(tarea => {
    task.innerHTML += `<li>${tarea.tarea} - ${tarea.hora}<input type="checkbox"></li>`
})
