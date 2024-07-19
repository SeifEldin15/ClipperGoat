import React from 'react';
import HeroSectionLanding2 from '../components/HeroSectionLanding2/HeroSectionLanding';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Leaderboard.css';
import pfpimg from '../assets/500x500.jpg';

const LeaderboardItem = ({ username, userTag, rank, isUp }) => (
  <div className="profile-container">
    <div className="user-content">
      <img src={pfpimg} alt={username} />
      <div className="user-info">
        <p className="username-info">{username}</p>
        <p className="user-tag">{userTag}</p>
      </div>
    </div>
    <div className="user-rank">
      <p>{rank}</p>
      <i className={`fa-solid fa-caret-${isUp ? 'up' : 'down'}`}></i>
    </div>
  </div>
);

const Leaderboard = () => {
  const leaderboardData = [
    { username: 'Sebastien', userTag: '@Sebastien', rank: 357, isUp: true },
    { username: 'Alice', userTag: '@Alice', rank: 286, isUp: false },
    { username: 'Bob', userTag: '@Bob', rank: 224, isUp: true },
    { username: 'Bob', userTag: '@Bob', rank: 224, isUp: true },
    { username: 'Sebastien', userTag: '@Sebastien', rank: 357, isUp: true },
    { username: 'Alice', userTag: '@Alice', rank: 286, isUp: false },
    { username: 'Bob', userTag: '@Bob', rank: 224, isUp: true },
    { username: 'Bob', userTag: '@Bob', rank: 224, isUp: true },
    
  ];

  return (
    <div>
      <Navbar />
      <HeroSectionLanding2 />
      <div className='LeaderContainer'>
        <div className="LeaderBoardSection Container-Spacing">
          <h1 className="custom-header-title">Choose Your <span className="information-container-header-span glow-text">Income Path</span></h1>
         
          <div className="leaderboard-rank-info-container">
      <div className="tab-container">
        <div className="tab active">Region</div>
        <div className="tab">National</div>
        <div className="tab">Global</div>
      </div>
      <div className="leaderboard-container">
        <div className="leader-card">
          <div className="avatar">
            <img src={pfpimg} alt="Jackson" />
          </div>
          <div className="name">Jackson</div>
          <div className="score" style={{ color: '#3498db' }}>1847</div>
          <div className="username">@username</div>
        </div>
        <div className="leader-card">
          <div className="avatar">
            <div className="crown">👑</div>
            <img src={pfpimg} alt="Eiden" />
          </div>
          <div className="name">Eiden</div>
          <div className="score" style={{ color: '#f1c40f' }}>2430</div>
          <div className="username">@username</div>
        </div>
        <div className="leader-card">
          <div className="avatar">
            <img src={pfpimg} alt="Emma Aria" />
          </div>
          <div className="name">Emma Aria</div>
          <div className="score" style={{ color: '#2ecc71' }}>1674</div>
          <div className="username">@username</div>
        </div>
      </div>
    </div>
         
          <div className="LeaderBoard-container">
            <div className='LeaderBoardCard popular'>
              <p className='pricing-card-header'></p>
              <div className="profile-content">
                {leaderboardData.map((user, index) => (
                  <LeaderboardItem key={index} {...user} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leaderboard;