const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req,res)=>{
   res.status(200).send(commentsByPostId);
});

app.post('/posts/:id/comments', (req,res)=>{
   const commentId = randomBytes(4).toString('hex');
   const {content} = req.body;
   const comments = commentsByPostId[req.params.id] || [];
   comments.push({id:commentId,content});
   commentsByPostId[req.params.id] = comments;
   res.status(201).send(commentsByPostId[req.params.id]);
});

app.listen(4001,()=>{
   console.log('listening on 4001');
});