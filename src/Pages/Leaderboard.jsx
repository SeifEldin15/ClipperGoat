import React from 'react';
import HeroSectionLanding2 from '../components/HeroSectionLanding2/HeroSectionLanding';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import InfoCard from '../components/InfoCard/InfoCard';
import './Leaderboard.css';
import pfpimg from '../assets/500x500.jpg';

const LeaderboardItem = ({ username, userTag, rank, isUp, number }) => (
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

const LeaderCard = ({ rank, name, score, username, isGoat }) => (
  <div className={`leader-card ${isGoat ? 'goat' : ''}`}>
    {isGoat && <div className="crown">👑</div>}
    <div className={`rank-number ${isGoat ? 'goat-number' : ''}`}><p>{rank}</p></div>
    <div className={`avatar ${isGoat ? 'goat-avatar' : ''}`}>
      <img src={pfpimg} alt={name} />
    </div>
    <div className="name">{name}</div>
    <div className="score" style={{ color: isGoat ? '#f1c40f' : (rank === 2 ? '#3498db' : '#2ecc71') }}>{score}</div>
    <div className="username">{username}</div>
  </div>
);

const Leaderboard = () => {
  const topLeaders = [
    { rank: 2, name: "Jackson", score: 1847, username: "@jackson" },
    { rank: 1, name: "Eiden", score: 2430, username: "@eiden", isGoat: true },
    { rank: 3, name: "Emma Aria", score: 1674, username: "@emmaaria" }
  ];

  const leaderboardData = [
    { username: 'Sebastien', userTag: '@Sebastien', rank: 357, isUp: true, number: 4 },
    { username: 'Alice', userTag: '@Alice', rank: 286, isUp: false, number: 5 },
    { username: 'Bob', userTag: '@Bob', rank: 224, isUp: true, number: 6 },
    { username: 'Charlie', userTag: '@Charlie', rank: 198, isUp: true, number: 7 },
    { username: 'David', userTag: '@David', rank: 176, isUp: false, number: 8 },
    { username: 'Eva', userTag: '@Eva', rank: 165, isUp: true, number: 9 },
    { username: 'Frank', userTag: '@Frank', rank: 152, isUp: false, number: 10 },
    { username: 'Grace', userTag: '@Grace', rank: 143, isUp: true, number: 11 },
  ];

  return (
    <div>
      <Navbar />
      <HeroSectionLanding2 />
      <div className='LeaderContainer'>
        <div className="LeaderBoardSection Container-Spacing">
          <h1 className="custom-header-title">Choose Your <span className="information-container-header-span glow-text">Income Path</span></h1>
          <div className="leaderboard-rank-info-container">
      <div className="leaderboard-container">
        <div className="leader-card">
          <div className="avatar">
            <img src={pfpimg} alt="Jackson" />
          </div>
          <div className="name">Jackson</div>
          <div className="score" style={{ color: '#3498db' }}>1847</div>
          <div className="username">@username</div>
        </div>
        <div className="leader-card goat">
        <div className="crown">👑</div>
        <div className='goat-number'><p>1</p></div>
          <div className="avatar goat-avatar">
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
      <InfoCard />
      <InfoCard />  
      <InfoCard />
      <Footer />
    </div>
  );
};
export default Leaderboard;