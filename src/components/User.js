import React from "react";

export default function User({ user }) {
  return (
    <div className="user">
      <div className='image'>
        <img src={user.avatar_url} alt="" width="250px" />
      </div>

      <table>
        <tbody>
          <tr>
            <td>Name: {user.name}</td>
            <td>
              Location: {user.location ? user.location : "No location found"}{" "}
            </td>
          </tr>
          <tr>
            <td>Email: {user.email ? user.email : "No email found"} </td>
            <td>Followers: {user.followers} </td>
          </tr>
          <tr>
            <td>Repositories: {user.public_repos} </td>
            <td>Repo URL: {user.repos_url} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
