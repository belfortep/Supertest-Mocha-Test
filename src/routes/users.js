const {Router} = require('express')
const router = Router()

router.get('/', (req,res)=>{
    return res.json('Usuarios...')
})

router.get('/:id', (req,res)=>{

    if(req.params.id === "userId001"){
        return res.json('Usuario 001 encontrado') 
    }
    return res.status(404).json('Usuario no encontrado')

    
});

router.post('/', (req,res)=>{
    const {username, password} =req.body
    if(username && password){
        return res.status(200).json('Usuario creado');
    }
    return res.status(400).json('No se logro crear nuevo usuario')
});

module.exports = router