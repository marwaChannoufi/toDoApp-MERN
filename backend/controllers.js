const Todo =require('./models')

exports.create = async  (req,res,next) =>{
        const {text}=req.body 
    try{
        const newTodo =new Todo({
            text
        })
        await newTodo.save()
    return res.json(newTodo)

    }catch(error){
        console.log(error)
    }
}


exports.getAll = async (req,res,next)=>{
    try{
        const todos = await Todo.find()
        return res.json(todos)
    }catch(error){
console.log(error)
    }
}
exports.delete = async (req,res,next)=>{
    try{
        const todo = await Todo.findById(req.params.todoId)
        await todo.remove()
        return res.json({todoId:req.params.todoId})
    }catch(error){

    }
}

exports.complete = async (req,res,next)=>{

    try{
        const todo = await Todo.findById(req.params.todoId)
        todo.isComplete = !todo.isComplete
        await todo.save()
        return res.json({todoId:req.params.todoId})
    }catch(error){
          console.log(error)   
        }

}