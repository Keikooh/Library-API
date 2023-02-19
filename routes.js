const express = require('express')
const routes = express.Router()

// LISTAR
routes.get('/',(req, res) => {
    req.getConnection( (err , conn) =>{
        if(err) return res.send(err)
        
        conn.query( 'SELECT * FROM books', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

// INSERTAR
routes.post('/',(req, res) => {
    req.getConnection( (err , conn) =>{
        if(err) return res.send(err)
        
        conn.query( 'INSERT INTO books set ?', [req.body] , (err, rows) => {
            if(err) return res.send(err)

            res.send('book has been inserted successfully')
        })
    })
})

// ELIMINAR
routes.delete('/:id',(req, res) => {
    req.getConnection( (err , conn) =>{
        if(err) return res.send(err)
        
        conn.query( 'DELETE FROM books WHERE id = ?', [req.params.id] , (err, rows) => {
            if(err) return res.send(err)

            res.send('book has been deleted successfully')
        })
    })
})

// ACTUALIZAR
routes.put('/:id',(req, res) => {
    req.getConnection( (err , conn) =>{
        if(err) return res.send(err)
        
        conn.query( 'UPDATE books set ? WHERE id = ?', [req.body, req.params.id] , (err, rows) => {
            if(err) return res.send(err)

            res.send('book has been updated successfully')
        })
    })
})





module.exports = routes