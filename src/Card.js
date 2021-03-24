import React from 'react';
import './Card.scss';

const Card = () => {
  return (
    <article className='card'>
      <div className='card__header'>
        <img
          className='card__headerBgImage'
          src={process.env.PUBLIC_URL + '/assets/Header_image.png'}
          alt='Steve Jobs'
        />
        <div className='card__headerButtons'>
          <img
            className='card__headerButtonArrowImage'
            src={process.env.PUBLIC_URL + '/assets/Arrow-1.svg'}
            alt='arrow left'
          />
          <span className='card__headerButtonBack'>Back</span>
        </div>
      </div>
      <div className='card__body'>
        <div className='card__container'>
          <div className='card__bodyHeader'>
            <div className='card__bodyHeaderTop'>
              <h1 className='card__bodyHeaderName'>Steve Jobs</h1>
              <img
                className='card__bodyHeadeMoreIcn'
                src={process.env.PUBLIC_URL + '/assets/more.svg'}
                alt='Click For ore'
              />
            </div>

            <div className='card__bodyHeaderFollowButttons'>
              <img
                className='card__bodyHeaderFollowIcon'
                src={process.env.PUBLIC_URL + '/assets/follow_icon.svg'}
                alt='Follow Icon'
              />
              <span className='card__bodyHeaderFollow'>FOLLOW</span>
            </div>
          </div>
          <div className='card__bodyStats'>
            <div className='card__bodyStatsLeft column'>
              <h2 className='card__bodyStatsNumber'>313</h2>
              <h3 className='card__bodyStatsTitle'>PATENTS</h3>
            </div>
            <div className='card__bodyStatsCenter column'>
              <h2 className='card__bodyStatsNumber'>1M 50k</h2>
              <h3 className='card__bodyStatsTitle'>FOLLOWERS</h3>
            </div>
            <div className='card__bodyStatsRight column'>
              <h2 className='card__bodyStatsNumber'>361</h2>
              <h3 className='card__bodyStatsTitle'>FOLLOWING</h3>
            </div>
          </div>
          <div className='card__bodyCategories'></div>
        </div>
      </div>
    </article>
  );
};

export default Card;
