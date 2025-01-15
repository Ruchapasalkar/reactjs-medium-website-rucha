import React from 'react';

function ArticleCard({ title, author, summary }) {
  return (
    <div className="article-card">
      <h2>{title}</h2>
      <p>By {author}</p>
      <p>{summary}</p>
    </div>
  );
}

export default ArticleCard;
