const express = require('express');

const app = express();

// let members = require('./members');
// const db = require('./models/index');
const db = require('./models');

const { Member } = db;

app.use(express.json());

// 간단한 미들웨어 추가해보기
app.use(function(req, res, next) {
  console.log(req.query);
  next();
});

app.get('/api/members', async (req, res) => {
  const { team } = req.query;
  if (team) {
    const teamMembers = await Member.findAll({ where: { team }, order: [['admissionDate', 'DESC']] });
    res.send(teamMembers);
  } else {
    const members = await Member.findAll();
    // const members = await Member.findAll({ order: [['admissionDate', 'DESC']] });
    res.send(members);
  }
});

app.get('/api/members/:id', async (req, res) => {
  const { id } = req.params;
  const member = await Member.findOne(({ where: { id } }));
  if (member) {
    console.log(member.toJSON());
    res.send(member);
  } else {
    res.status(404).send({
      message: 'There is no member with the id!',
    });
  }
});

app.post('/api/members', async (req, res) => {
  // console.log(req.body);
  const newMember = req.body;
  // const member = Member.build(newMember);
  // await member.save();
  const member = await Member.create(newMember);
  res.send(member);
});

// app.put('/api/members/:id', async (req, res) => {
//   const { id } = req.params;
//   const newInfo = req.body;
//   const result = await Member.update(newInfo, { where: { id } });
//   if (result[0]) {
//     res.send({ message: `${result[0]} rows(s) affected` });
//   } else {
//     res.status(404).send({ message: 'There is no member with the id!' });
//   }
// });

app.put('/api/members/:id', async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  const member = await Member.findOne({ where: { id } });
  if (member) {
    Object.keys(newInfo).forEach((prop) => {
      member[prop] = newInfo[prop];
    });
    await member.save();
    res.send(member);
  } else {
    res.status(404).send({ message: 'There is no member with the id!' });
  }
});

// app.delete('/api/members/:id', async (req, res) => {
//   const { id } = req.params;
//   const deletedCount = await Member.destroy({ where: { id } });
//   if (deletedCount) {
//     res.send({ message: `${deletedCount} row(s) deleted` });
//   } else {
//     res.status(404).send({ message: 'There is no member with the id!' });
//   }
// });

app.delete('/api/members/:id', async (req, res) => {
  const { id } = req.params;
  const member = await Member.findOne({ where: { id } });
  if (member) {
    await member.destroy();
    // const result = await member.destroy();
    // console.log(result);
    res.send({ message: `1 row(s) deleted` });
  } else {
    res.status(404).send({ message: 'There is no member with the id!' });
  }
});

app.listen(3000, () => {
  console.log('Server is listening...');
});