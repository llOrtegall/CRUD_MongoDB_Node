export function TwitterFollowCard({ children, userName = 'midudev', name, isFollowing }) {

  const imageSrc = `https://unavatar.io/${userName}`

  return (

    //* TODO LO QUE ESTÁ AQUÍ SON ELEMENTOS 

    <article className='twitter'>
      <header className='twitter-header'>
        <img className='twitter-avatar'
          src={imageSrc}
          alt="foto" />
        <div className='twitter-info'>
          <strong>{children}</strong>
          <span className='twitter-info-username'>{userName}</span>
        </div>
      </header>
      <aside>
        <button className='twitter-info-button'>
          Seguir {/* <<<------ CHILDREN */}
        </button>
      </aside>
    </article>

    //* TODO LO QUE ESTÁ AQUÍ SON ELEMENTOS 
  )
}