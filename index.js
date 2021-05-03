// const express = require('express')
// const app = express();
// const port = 8000;

// app.route('/Create').get(function(req,res)
// {
//     res.send("Create Room!!");
// });
// app.route('/Join').get(function(req,res)
// {
//     res.send("Join Room!!");
// });
// app.get('/',function(req,res){
//     res.send('Welcome to Isshoni!!');
// });

    app.set('view engine','pug');
    app.get('/',function(req,res){
        res.render('index',{
            title:'Isshoni',message1:'Welcome Friend!',message2:'Ready to Create a Group'
        });
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`)
    });
