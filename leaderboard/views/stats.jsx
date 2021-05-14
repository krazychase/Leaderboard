import React from 'react'
import stats from '../models/stats'
import Layout from './layout'

function StatsTable(props) {
  return (
    <table>
      <tbody>
        <thead>
          <td>Username</td><td>High Score</td>
        </thead>
        {
          props.stats.map(stat => (
            <tr>
              <td>{stat.name}</td>
              <td>{stat.score}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default function Stats(props) {
  let stats;
  if (props.stats.length > 0) 
    courses = <StatsTable stats={props.stats} />
  else
    courses = <p>No scores found. <a href="/stats/">Add a new score</a></p>

  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <a href="/dashboard/">Dashboard</a> | <a href="/users/profile">Profile</a> | <a href="/stats/">New Score</a> | <a href="/logout">Log out</a>
      <h3>All scores</h3>
      {stats}
    </Layout>
  );
}
