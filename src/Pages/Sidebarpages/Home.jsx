import React from "react";
import MonthlyIncomeChart from "../../components/Charts/MonthlyIncomeChart";
import PolarAreaChart from "../../components/Charts/PolarAreaChart"
import MyGaugeChart from "../../components/Charts/MyGaugeChart";

const SocialCard = ({ platform, username, followers, today, isPositive }) => (
  <div className="grid-item regular">
    <div className={`followers-card ${platform}`}>
      <div className={`followers-card_border ${platform}`}></div>
      <div className="followers-card_user">
        <img
          src={`https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Social%20media%20dashboard/images/icon-${platform}.svg`}
          alt={platform}
        />
        <p>{username}</p>
      </div>
      <div className="followers-number">
        <span className="followers-number_value">{followers}</span>
        <p className="followers-number_text">Followers</p>
      </div>
      <div
        className={`fallowers-today-number ${
          isPositive ? "positive" : "negative"
        }`}
      >
        <img
          src={`https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Social%20media%20dashboard/images/icon-${
            isPositive ? "up" : "down"
          }.svg`}
          alt=""
        />
        <span className="followers-today-number_text">{today} Today</span>
      </div>
    </div>
  </div>
);
const chartData = {
  labels: ['users', 'pending sites', 'fully done sites', 'half finished sites', 'total parts', 'total employes'],
  values: [1, 6, 3, 5, 2, 3],
};
const Home = () => {
  return (
    <div className="addproject">
      <div className="addproject-main">
        <main className="dashboardmain">
          <header>
            <h2>Construction Reports</h2>
          </header>
          <nav>
            <h4>Finances</h4>
          </nav>
          <div className="grid">
            <div className="grid-item big">  <PolarAreaChart data={chartData} /></div>
            <SocialCard
              platform="facebook"
              username="@nathanf"
              followers="1987"
              today="12"
              isPositive={true}
            />
            
            <SocialCard
              platform="instagram"
              username="@nathanf"
              followers="11k"
              today="1099"
              isPositive={true}
            />
            <SocialCard
              platform="youtube"
              username="@nathanf"
              followers="1987"
              today="144"
              isPositive={false}
            />
            <SocialCard
              platform="twitter"
              username="@nathanf"
              followers="1044"
              today="99"
              isPositive={true}
            />
            <div className="grid-item long">
              <div className="widget">
                <MonthlyIncomeChart />
              </div>
            </div>
            <div className="grid-item tiny">
              <div class="stat-card glow">
                <i class="fas fa-chart-line"></i>
                <div class="stat-info">
                  <h3>Revenue</h3>
                  <p>$67,895</p>
                </div>
              </div>
            </div>
            <div className="grid-item regular"><MyGaugeChart/></div>
            <div className="grid-item tiny">
            <div class="stat-card glow">
                <i class="fas fa-chart-line"></i>
                <div class="stat-info">
                  <h3>Total users</h3>
                  <p>73k</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
