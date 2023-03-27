import React from "react";
import LangContext from "./LangContext";
import Article from "./Article";



function ArticleAuthor(props) {
  return (
      <div className="article__author">
        <p className="article__name">{props.lang.article__name}</p>
        <p className="article__date">{props.lang.article__date}</p>
        <p className="article__theme">{props.lang.article__theme}</p>
      </div>
    );
  }
export default ArticleAuthor;