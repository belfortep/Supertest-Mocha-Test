const request = require('supertest')
const app=require('../src/app')

//Testing de usuarios

//describe, agrupa tests

describe('GET /users', ()=>{
    it('deberia responder con un json de usuarios', (done)=>{

        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)  //quiero que me responda un codigo de estado 200
    
    });
})

describe('GET /users/:id',()=>{

    it('deberia responder con un json de un solo usuario', (done)=>{
        request(app)
            .get('/users/userId001')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })

    it('deberia responder con Usuario 001 encontrado si existe', (done)=>{
        request(app)
            .get('/users/userId001')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect('"Usuario 001 encontrado"')
            .end((err)=>{
                if(err) return done(err)
                done();
            })
    })

    it('deberia responder con usuario no encontrado', (done)=>{

        request(app)
            .get('/users/NOUSER')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect('"Usuario no encontrado"')
            .end((err)=>{
                if(err) return done(err)
                done();
            })

    })

})


describe('POST /users', ()=>{
    it('deberia responder con 200 y Usuario creado', (done)=>{
        const data = {
            username: 'john',
            password: 'password'
        }
        request(app)
            .post('/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect('"Usuario creado"')
            .end((err)=>{
                if(err) return done(err)
                done()
            })

    })

    it('deberia responder con 400 y No se logro crear nuevo usuario', (done)=>{
        const data = {}
        request(app)
            .post('/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect('"No se logro crear nuevo usuario"')
            .end((err)=>{
                if(err) return done(err)
                done()
            })
    })

})
