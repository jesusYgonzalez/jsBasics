const axios = require('axios');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());




async function getResults(query) {
  const key = '6ec6f1a98335d9e884a2fd4b207bafb2';
  try {
    const res = await axios(`https://api.themoviedb.org/3/movie/${query}?api_key=${key}&language=en-US`);
    const movies = res.data.original_title;
    console.log(movies);
  } catch (error) {
    console.log(error);
  }
}
getResults('15');


















// app.use('/', (req, res, next) => {
//   res.json({msg: 'this should work'})
// });


app.listen(3000, () => {
  console.log('running on port 3000')
});


