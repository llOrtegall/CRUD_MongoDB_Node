export function TwitterFollowCard({userName, name, isFollowing}) {
  
  const imageSrc = `https://unavatar.io/${userName}`

  return(
    <article className='twitter'>
      <header className='twitter-header'>
        <img className='twitter-avatar' 
          src={imageSrc} 
          alt="foto" />
        <div className='twitter-info'>
          <strong>{name}</strong>
          <span className='twitter-info-username'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className='twitter-info-button'>
      Seguir
        </button>
      </aside>
    </article>
  )
}