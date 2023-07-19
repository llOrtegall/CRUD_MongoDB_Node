import { useState } from "react";

export function TwitterFollowCard({ children, userName }) {

  const [isFollowing, setIsFollowing] = useState(false);

  console.log('render follo', userName)

  const text = isFollowing ? 'Siguiendo' : 'Seguir';

  const buttonClasseName = isFollowing
    ? 'twitter-info-button is-following'
    : 'twitter-info-button';
  const handleClik = () => {
    setIsFollowing(!isFollowing)
  }

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
        <button className={buttonClasseName} onClick={handleClik}>
          {/* <<<------ CHILDREN */}
          {text}
        </button>
      </aside>
    </article>

    //* 
  )
}