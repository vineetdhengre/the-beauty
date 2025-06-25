import React from 'react'

export default function LatestStories() {

    const stories = [
    { key: 'pigmentation', title: 'Skin Pigmentation', excerpt: 'Skin pigmentation is a common concern for many people, affecting individuals of all skin types and tones...', image: 'https://ext.same-assets.com/3220550431/230479283.jpeg', link: '/blogs' },
    { key: 'travel', title: 'Travel-Friendly Beauty: Why All-in-One Products Are Your Best Companion', excerpt: 'Traveling is an exciting adventure, but it can often throw your beauty routine into disarray. Whether you’re jetting off for a weekend getaway or embarking on a long journey....', image: 'https://ext.same-assets.com/3220550431/388936719.jpeg', link: '/blogs' },
    { key: 'men', title: 'Top 10 Skin Care tips for Men', excerpt: 'Skincare isn’t just for women; men also deserve to have healthy, radiant skin. However, many men find the prospect of a detailed skincare routine daunting...', image: 'https://ext.same-assets.com/3220550431/1650747125.jpeg', link: '/blogs' },
  ];

  return (
    <div>

    <section className="py-5">
      <div className="container">
        <h3 className="mb-4 font-weight-bold">Latest Stories</h3>
        <div className="row">
          {stories.map(story => (
            <div className="col-md-4 mb-4" key={story.key}>
              <div className="card h-100 border-0 shadow-sm">
                <img src={story.image} className="card-img-top" alt={story.title} />
                <div className="card-body d-flex flex-column">
                  <h6 className="font-weight-bold mb-2">{story.title}</h6>
                  <p className="flex-grow-1 text-muted small">{story.excerpt}</p>
                  <Link to={story.link} className="btn btn-outline-warning btn-sm align-self-start mt-1">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    </div>
  )
}
