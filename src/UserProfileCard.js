import React from 'react';
import './UserProfileCard.css';

function UserProfileCard() {
  return (
    <div className="user-profile-card">
      <div className="heading">
        <img src="jh profile.jpg" alt="Profile Pic" />
        <div>
          <h2>John-Hendry Maloney</h2>
          <h5>Front-End Developer</h5>
        </div>
      </div>
      <p>
      Meet John, a dynamic Front-End Developer and tech learner. He's a pro at creating captivating user experiences using HTML, CSS, JavaScript, React, Node.js, and C#.
      </p>
      <div className="user-stats">
        <div>
          <h6>Followers</h6>
          <p>1990</p>
        </div>
        <div>
          <h6>Following</h6>
          <p>2105</p>
        </div>
        <div>
          <h6>Projects</h6>
          <p>14+</p>
        </div>
      </div>
      <a href="https://github.com/metalspade" target="_blank" rel="noopener noreferrer"><button className = "contact-btn"type="submit">Contact Me</button></a>
      <button className = "profile-btn"type="submit">View Profile</button>
    </div>
  );
}

export default UserProfileCard;