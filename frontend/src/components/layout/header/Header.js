import Icon from "../../common/Icon";

export default function Header({showSidebar, setShowSidebar}) {
    
    const toggleDarkMode = (e)=>{
        if(e.target.checked){
            document.body.classList.add('dark-theme-variables')
        }else{
            document.body.classList.remove('dark-theme-variables')
        }
    }
   
    return(
        <header className="header">   
            <button onClick={()=>{setShowSidebar(true); }} id="menu-bar">
                <span className="material-symbols-sharp">menu</span>
            </button>
            {/* <form method="post" action="#" className="search">
                <input type="search" name="search" placeholder="Search here..." />
                <button type="submit"><Icon label={'search'} /></button>            
            </form> */}
            <div className="theme-toggler">
                <input type="checkbox" id="darkmode-toggle" onChange={toggleDarkMode}/>
                <label htmlFor="darkmode-toggle">
                    <Icon label={'light_mode'} id={'sun'} />
                    <Icon label={'dark_mode'}  id={'moon'} />
                </label>
            </div>
            <div className="profile">
                <div className="info">
                    <p><b>Younes Nait Bakkou</b></p>
                    <p>Gestionnaire</p>
                    <small className="text-muted"></small>
                </div>

                <div className="profile-photo">
                    <img src="/assets/images/layout/profile-image.jpg" alt="" />
                </div>
            </div>
        </header>
    )
}