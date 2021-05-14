import React from 'react';
import Layout from '../layout';
import Message from './message';

function Stat(props) {
  let action = "/stat/"
  if (props.stat) 
    action += props.stat._id

  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <Message messages={props.errors} />
      <form method="POST" action={action}>
        <label>
          <input type="text" name="name" required placeholder="name" value={(props.stat)? props.stat.name : null } />
        </label><br />
        <label>
          <input type="text" name="level" required placeholder="level" value={(props.stat)?props.stat.level:null}/>
        </label><br />
        <br /> <br />
        <button type="submit">Save</button>
        <br /> <br />
        <a href="/stats/">Cancel</a>
      </form>
    </Layout>
  );
}

module.exports = Stat;

