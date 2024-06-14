import React from 'react'
import Table from '../../common/Table'
import './viewLayout.css'

export default function ViewLayout({resourceName}) {
  return (
    <main className={`views-container`}>
        <div className="resource-container">
          <h1>{resourceName}</h1>

          <Table resourceName={resourceName.toLowerCase()} isPaginate={true}/>

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
    </main>
  )
}
