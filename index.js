const redis = require('redis');
const client = redis.createClient();

// ***KEY VALUES***

// client.set('name','Ajay');
// client.set('age',20);


// client.get('name',(err,res)=>{
//     console.log(res)
// })


// client.del('name')

// ***LISTS***

// client.lpush('names','Flavio')
// client.rpush('names','Shankar')
// client.lpush('names','Oofy')

// client.lrange('names' , 0 , -1 ,(err,res)=>{
//     console.log(res)
// })

// client.lpop('names')

// client.rpop('names')

// client.lrange('names' , 0 , 100,(err,res)=>{
//     console.log(res)
// })

// client.del('names')

// client.lrange('names' , 0 , 100,(err,res)=>{
//     console.log(res)
// })

// ***SETS***

// client.SADD('names','Flavio')
// client.SADD('names',"Ajay")
// client.SADD('names' , 'oofy' ,'rpger')

// const names = ['lol','lilly','crage']
// client.SADD('names' , names)

// client.spop('names')

// client.spop('names' ,4)

// client.del('names')

// client.smembers('names' ,(err,result)=>{
//     console.log(result)
// })


// ***HASHES***

// client.hmset('person:1' , 'name' ,'Ajay' ,'age' , 19)

// client.hset("psrson:1" , 'age' , 18)

// client.hincrby('person:1' , 'age' , 25)


// client.del('person:1')

// client.HGETALL('person:1' ,(err,result)=>{
//     console.log(result)
// })



// ***Subscriptions*** PUB/SUB Model

const subscriber = redis.createClient()
const publisher = redis.createClient()

subscriber.subscribe('pets')

publisher.publish('pets' ,'Doggos')

subscriber.on('message',(channel , message) =>{
    console.log(channel , message)
})
