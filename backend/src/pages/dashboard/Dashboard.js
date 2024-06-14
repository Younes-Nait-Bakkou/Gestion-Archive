import { useEffect, useState } from "react"
import Table from "../../components/common/Table";
import { axiosAuth } from '../../layouts/admin/AdminLayout'
import './dashboard.css';
import InsightCard from "../../components/common/InsightCard";


export default function Dashboard({title, resourceName}){
    const [stats, setStats] = useState([]);

    const urlModulesStats = `/${resourceName}-stats`;

    const fetchStats= () => {
      axiosAuth.get(urlModulesStats)
      .then((r)=>{
        setStats(r.data);
        console.log(r.data)
      })
      .catch((err)=>{
        console.error('Error fetching module statistics', err);
      })
    };

    useEffect(()=>{
        fetchStats();
    },[])

    return (
      <main className={`${title.toLowerCase()}-container`}>
        <h1>{title}</h1>

        {/* Insights START  */}
        <div className="insights">
          {stats.map((stat,i)=>
          <InsightCard
            key={i}
            resourceName={resourceName}
            stat={stat}
          />)}
        </div>
        {/* Insights END  */}

        {/* Recent Archives START  */}
        <div className="recent-archives">
          <h1>Recent Archives</h1>

          <Table resourceName={resourceName} />

          <div className="card-container" id="card-container">
            <div className="card">
              <button>
                <img src="assets/images/layout/folder.png" alt="" />
                <span className="material-symbols-sharp">pending</span>
                <div className="info in-progress">
                  <h2>M201</h2>
                  <h3>DEVOWFS202</h3>
                  <h3>Younes Nait Bakkou</h3>
                  <small>2022/04/01</small>
                </div>
              </button>
            </div>
            <div className="card">
              <button>
                <img src="assets/images/layout/folder.png" alt="" />
                <span className="material-symbols-sharp">pause_circle</span>
                <div className="info">
                  <h2>M201</h2>
                  <h3>DEVOWFS202</h3>
                  <h3>Younes Nait Bakkou</h3>
                  <small>2022/04/01</small>
                </div>
              </button>
            </div>
            <div className="card">
              <button>
                <img src="assets/images/layout/folder.png" alt="" />
                <span className="material-symbols-sharp">lock</span>
                <div className="info">
                  <h2>M201</h2>
                  <h3>DEVOWFS202</h3>
                  <h3>Younes Nait Bakkou</h3>
                  <small>2022/04/01</small>
                </div>
              </button>
            </div>
            <div className="card">
              <button>
                <img src="assets/images/layout/folder.png" alt="" />
                <span className="material-symbols-sharp">lock_open</span>
                <div className="info">
                  <h2>M201</h2>
                  <h3>DEVOWFS202</h3>
                  <h3>Younes Nait Bakkou</h3>
                  <small>2022/04/01</small>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Recent Archives END */}

        {/* Recent Updates START */}
        <div className="recent-updates">
          <h1>Recent Updates</h1>
          <div className="updates">
            <div className="update">
              <div className="profile-photo">
                <img src="/assets/images/layout/profile-image.jpg" alt="" />
              </div>
              <div className="message">
                <p>
                  <b>Younes</b> Archived a Module
                </p>
              </div>
            </div>

            <div className="update">
              <div className="profile-photo">
                <img src="/assets/images/layout/profile-image.jpg" alt="" />
              </div>
              <div className="message">
                <p>
                  <b>Younes</b> Archived a Module
                </p>
              </div>
            </div>

            <div className="update">
              <div className="profile-photo">
                <img src="/assets/images/layout/profile-image.jpg" alt="" />
              </div>
              <div className="message">
                <p>
                  <b>Younes</b> Archived a Module
                </p>
              </div>
            </div>

            <div className="update">
              <div className="profile-photo">
                <img src="/assets/images/layout/profile-image.jpg" alt="" />
              </div>
              <div className="message">
                <p>
                  <b>Younes</b> Archived a Module
                </p>
              </div>
            </div>

            <div className="update">
              <div className="profile-photo">
                <img src="/assets/images/layout/profile-image.jpg" alt="" />
              </div>
              <div className="message">
                <p>
                  <b>Younes</b> Archived a Module
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Updates END */}
      </main>
    );
}