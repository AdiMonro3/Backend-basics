import express from 'express';

const app=express();

app.get('/',(req, res)=>{
    res.send("<h1>bitch! we here</h1>");
}); 

app.get('/content',(req,res)=>{
    const items = [
        {
          id: 1,
          content: `This is the content for item 1`
        },
        {
          id: 2,
          content: `Content for item 2 goes here`
        },
        {
          id: 3,
          content: `Here is item 3's content`
        },
        {
          id: 4,
          content: `Item 4 content example`
        },
        {
          id: 5,
          content: `Finally, item 5`
        }
      ];
      
    res.send(items);
      
})
const port=3000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})